# Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Query](#query)
  * [Objects](#objects)
    * [About](#about)
    * [Contact](#contact)
    * [Date](#date)
    * [Fact](#fact)
    * [Figma](#figma)
    * [GitHub](#github)
    * [Links](#links)
    * [Main](#main)
    * [Notion](#notion)
    * [Project](#project)
    * [Website](#website)
    * [Work](#work)
  * [Scalars](#scalars)
    * [Boolean](#boolean)
    * [Int](#int)
    * [String](#string)

</details>

## Query
<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>main</strong></td>
<td valign="top"><a href="#main">Main</a>!</td>
<td>

Queries main information about author.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>about</strong></td>
<td valign="top"><a href="#about">About</a>!</td>
<td>

Queries general information about author.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>work</strong></td>
<td valign="top">[<a href="#work">Work</a>]!</td>
<td>

Queries a list of work experiences as defined in the 'Work' type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>projects</strong></td>
<td valign="top">[<a href="#project">Project</a>]!</td>
<td>

Queries a list of projects as defined in the 'Project' type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>facts</strong></td>
<td valign="top">[<a href="#fact">Fact</a>]!</td>
<td>

Queries a list of fun facts as define in the 'Fact' type.

</td>
</tr>
</tbody>
</table>

## Objects

### About

General information about the author.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

List of information/facts about author.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stack</strong></td>
<td valign="top">[<a href="#string">String</a>]!</td>
<td>

The tech stack currently used by author.

</td>
</tr>
</tbody>
</table>

### Contact

Point-of-contact to the author.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of service.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>link</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Link related to my profile/contact in the service.

</td>
</tr>
</tbody>
</table>

### Date

Date range (start, end) for a given work experience or project.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>start</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Start date of project/work.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>end</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional end date of project/work. Could be left blank to mean 'current'.

</td>
</tr>
</tbody>
</table>

### Fact

Extra "unimportant" facts about the author.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>category</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Type/Genre of fun fact.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The text of the fun fact itself.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>link</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional link related to the information.

</td>
</tr>
</tbody>
</table>

### Figma

Figma mockup design links related to a project.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>desktop</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional link to desktop app mock-up.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>mobile</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional link to mobile app mock-up.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>web</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional link to web app mock-up.

</td>
</tr>
</tbody>
</table>

### GitHub

GitHub links related to a project.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>backend</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional link to the backend repo on GitHub.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>frontend</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional link to the frontend repo on GitHub.

</td>
</tr>
</tbody>
</table>

### Links

Represents the links a project may have.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>figma</strong></td>
<td valign="top"><a href="#figma">Figma</a></td>
<td>

Optional Figma links as described in the 'Figma' type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>github</strong></td>
<td valign="top"><a href="#github">GitHub</a></td>
<td>

Optional GitHub links as described in the 'GitHub' type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>notion</strong></td>
<td valign="top"><a href="#notion">Notion</a></td>
<td>

Optional Notion link as described in the 'Notion' type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>website</strong></td>
<td valign="top"><a href="#website">Website</a></td>
<td>

Optional website link as described in the 'Website' type.

</td>
</tr>
</tbody>
</table>

### Main

Main information about author such as name and purpose.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Author's name.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>subtitle</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional subtitle giving extra (important) information.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>titles</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

List of professional titles.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>contacts</strong></td>
<td valign="top">[<a href="#contact">Contact</a>]!</td>
<td>

List of point-of-contacts to the author.

</td>
</tr>
</tbody>
</table>

### Notion

Notion link related to a project.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>workboard</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional Link to Notion workboard.

</td>
</tr>
</tbody>
</table>

### Project

Information about a project.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>name</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The name of the project.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional small, pitch description of the project.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

List of roles I played throughout the project's development.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>content</strong></td>
<td valign="top">[<a href="#string">String</a>]!</td>
<td>

List of bullet-point information about the project.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>links</strong></td>
<td valign="top"><a href="#links">Links</a></td>
<td>

Optional links to showcase the project as described in 'Links' type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stack</strong></td>
<td valign="top">[<a href="#string">String</a>!]!</td>
<td>

The tech stack used in the project.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#date">Date</a></td>
<td>

The date range worked on the project as described in 'Date' type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>progress</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional project progress. (ex. "Hiatus", "Bottleneck", etc.)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>place</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

Optional info on sorting the project, where place represents which place to be sorted in. (might become deprecated)

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>isMajor</strong></td>
<td valign="top"><a href="#boolean">Boolean</a></td>
<td>

Optional boolean stating if the project is a major project with phases. (6+ months)

</td>
</tr>
</tbody>
</table>

### Website

Website where a project is hosted.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>link</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional Link to the website of the project.

</td>
</tr>
</tbody>
</table>

### Work

Information about previous/current work experiences.

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>company</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Name of company worked for.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>position</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

Position in the company.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>location</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Company's location in <City, State> format.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>description</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

Optional main/general information/thoughts about the work experience.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>points</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

Optional list of bullet-point styled information of what author did in company.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>date</strong></td>
<td valign="top"><a href="#date">Date</a>!</td>
<td>

Date range worked in company, based on 'Date' type.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>stack</strong></td>
<td valign="top">[<a href="#string">String</a>]</td>
<td>

Tech stack used while working in the company/position.

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### String

The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.

