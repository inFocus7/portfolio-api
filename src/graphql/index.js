// TODO Learn more about importing/require...
import apollo from "apollo-server-express";
const { ApolloServer, gql } = apollo;
import mongo from "mongodb";
const { MongoClient } = mongo;
import gqltools from "graphql-tools";
const { makeExecutableSchema } = gqltools;

// TODO Split types into seperate files.
const typeDefs = gql`
  """
  General information about the author.
  """
  type About {
    """
    List of information/facts about author.
    """
    content: [String]
    """
    The tech stack currently used by author.
    """
    stack: [String]!
  }

  """
  Extra "unimportant" facts about the author.
  """
  type Fact {
    """
    Type/Genre of fun fact.
    """
    category: String!
    """
    The text of the fun fact itself.
    """
    content: String!
    """
    Optional link related to the information.
    """
    link: String
  }

  """
  Point-of-contact to the author.
  """
  type Contact {
    """
    Name of service.
    """
    name: String!
    """
    Link related to my profile/contact in the service.
    """
    link: String!
  }

  """
  Main information about author such as name and purpose.
  """
  type Main {
    """
    Author's name.
    """
    name: String!
    """
    Optional subtitle giving extra (important) information.
    """
    subtitle: String
    """
    List of professional titles.
    """
    titles: [String!]!
    """
    List of point-of-contacts to the author.
    """
    contacts: [Contact]!
  }

  """
  Date range (start, end) for a given work experience or project.
  """
  type Date {
    """
    Start date of project/work.
    """
    start: String!
    """
    Optional end date of project/work. Could be left blank to mean 'current'.
    """
    end: String
  }

  """
  Figma mockup design links related to a project.
  """
  type Figma {
    """
    Optional link to desktop app mock-up.
    """
    desktop: String
    """
    Optional link to mobile app mock-up.
    """
    mobile: String
    """
    Optional link to web app mock-up.
    """
    web: String
  }

  """
  GitHub links related to a project.
  """
  type GitHub {
    """
    Optional link to the backend repo on GitHub.
    """
    backend: String
    """
    Optional link to the frontend repo on GitHub.
    """
    frontend: String
  }

  """
  Notion link related to a project.
  """
  type Notion {
    """
    Optional Link to Notion workboard.
    """
    workboard: String
  }

  """
  Website where a project is hosted.
  """
  type Website {
    """
    Optional Link to the website of the project.
    """
    link: String
  }

  """
  Represents the links a project may have.
  """
  type Links {
    """
    Optional Figma links as described in the 'Figma' type.
    """
    figma: Figma
    """
    Optional GitHub links as described in the 'GitHub' type.
    """
    github: GitHub
    """
    Optional Notion link as described in the 'Notion' type.
    """
    notion: Notion
    """
    Optional website link as described in the 'Website' type.
    """
    website: Website
  }

  """
  Information about a project.
  """
  type Project {
    """
    The name of the project.
    """
    name: String!
    """
    Optional small, pitch description of the project.
    """
    description: String
    """
    List of roles I played throughout the project's development.
    """
    role: [String!]!
    """
    List of bullet-point information about the project.
    """
    content: [String]!
    """
    Optional links to showcase the project as described in 'Links' type.
    """
    links: Links
    """
    The tech stack used in the project.
    """
    stack: [String!]!
    """
    The date range worked on the project as described in 'Date' type.
    """
    date: Date
    """
    Optional project progress. (ex. "Hiatus", "Bottleneck", etc.)
    """
    progress: String
    """
    Optional info on sorting the project, where place represents which place to be sorted in. (might become deprecated)
    """
    place: Int
    """
    Optional boolean stating if the project is a major project with phases. (6+ months)
    """
    isMajor: Boolean
  }

  """
  Information about previous/current work experiences.
  """
  type Work {
    """
    Name of company worked for.
    """
    company: String!
    """
    Position in the company.
    """
    position: String!
    """
    Company's location in <City, State> format.
    """
    location: String
    """
    Optional main/general information/thoughts about the work experience.
    """
    description: String
    """
    Optional list of bullet-point styled information of what author did in company.
    """
    points: [String]
    """
    Date range worked in company, based on 'Date' type.
    """
    date: Date!
    """
    Tech stack used while working in the company/position.
    """
    stack: [String]
  }

  type Query {
    """
    Queries main information about author.
    """
    main: Main!
    """
    Queries general information about author.
    """
    about: About!
    """
    Queries a list of work experiences as defined in the 'Work' type.
    """
    work: [Work]!
    """
    Queries a list of projects as defined in the 'Project' type.
    """
    projects: [Project]!
    """
    Queries a list of fun facts as define in the 'Fact' type.
    """
    facts: [Fact]!
  }
`;

// TODO Add some error handling to async functions!
const resolvers = {
  Query: {
    about(_parent, _args, _context, _info) {
      return _context.db
        .collection("about")
        .findOne()
        .then((data) => data);
    },
    async facts(_parent, _args, _context, _info) {
      return await _context.db.collection("facts").find().toArray();
    },
    main(_parent, _args, _context, _info) {
      return _context.db
        .collection("main")
        .findOne()
        .then((data) => data);
    },
    async projects(_parent, _args, _context, _info) {
      return await _context.db.collection("projects").find().toArray();
    },
    async work(_parent, _args, _context, _info) {
      return await _context.db.collection("work").find().toArray();
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

let db;

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(
          `mongodb+srv://reader:${process.env.GPORTFOLIO_PASS}@portfolio-v3qws.mongodb.net/portfolio?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        );

        if (!dbClient.isConnected()) await dbClient.connect();
        db = dbClient.db("portfolio");
      } catch (e) {
        console.log("Error connecting with graphql context (db)", e);
      }
    }

    return { db };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer;
