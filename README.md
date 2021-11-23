# MVC-techblog ![GitHub license](https://img.shields.io/badge/license-MIT%20License-blue.svg)
# Live Site 
Add MVC LiveSite

## Description
This application is a techblog, where developers can publish their blog posts and comment on other developers’ posts as well. This site is deployed to Heroku and was built from scratch. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install this application go to https://github.com/mibrahim234/MVC-techblog. <br> 
Clone the repo by pressing the green button. User can clone using an SSH key or HTTPS key. User will also be able to download the zip file. User should open the integrated terminal from the server.js file and download the dependencies by typing npm i. <br>
npm i will install the dependencies and devdependencies from this application. 
## Usage 
 (show images here)

## Config
 Configure `.env.EXAMPLE`

- rename file to `.env`

```
DB_NAME=tech_blog_db
DB_USER=
DB_PW=
```

```
DB_NAME=tech_blog_db
DB_USER=root
DB_PW=Password
```

---

### Schema

`db` directory holds `schema.sql` with script to create database in Workbench or from the command line.

---

### Seed

`seeds` directory holds placeholder data to seed the database. Data can be changed to suit users needs or preference.

```
npm run seed
```

---

### Start Server

```
npm start
```

for `nodemon server.js`:

```
npm run dev
```

---
  
## License
Copyright (c) [2021]
The license is MIT License. 
Read more about it at https://opensource.org/licenses/MIT.
## Credits
Made with ❤️ by Mohammad Ibrahim

## Questions
If you have any additional questions please contact me at mohamm1417@gmail.com.
GitHub: https://github.com/mibrahim234