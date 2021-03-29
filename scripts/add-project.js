const fs = require("fs");
const { basename } = require("path");

// make sure we have everything we need
let project = {
  name: process.argv[2] ?? helpAndQuit(),
  description: process.argv[3] ?? helpAndQuit(),
  link: process.argv[4] ?? helpAndQuit(),
};

// open the file and load JSON
let projectsFilePath = "src/data/projects.json";
let projects = JSON.parse(
  fs.readFileSync(projectsFilePath, { encoding: "utf8" })
);
projects.unshift(project);
fs.writeFileSync(projectsFilePath, JSON.stringify(projects, undefined, "  "));

//
// functions
//

function helpAndQuit() {
  console.log(
    `Usage: node ${basename(
      process.argv[1],
      ".js"
    )} <name> <description> <link>`
  );
  process.exit(1);
}
