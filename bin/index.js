#!/usr/bin/env node

const path = require('node:path');
const { exec } = require('node:child_process');

// Check if args are empty
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log(
    `\nNot enough arguments:
      Please supply: repo-url, repo-branch (optional), & directory-name`
  );
  return 1; // error
}

// Extract / Define Variables
const URL = args[0];
let DIR_NAME = '';
let BRANCH_NAME = '';
const REPO_NAME = path.parse(URL).name;

if (args.length === 2) {
  DIR_NAME = args[1];
} else if (args.length === 3) {
  BRANCH_NAME = args[1];
  DIR_NAME = args[2];
}

function help() {
  console.log(
    `\nClones a git repo and resets the history

    Syntax: gcnh [-h|--help] <repo-url> [<repo-branch>] <dir-name>

    Arguments:
    <repo-url>      Url to the git repository
    <repo-branch>   OPTIONAL: Name of repository branch to clone
    <dir-name>      Name of directory to clone the branch to

    Options:
    -h              Prints help info
    --help          Prints help info`
  );

  return 0; // success
}

function gitCloneNoHistory() {
  const cloneDefault = `git clone --depth 1 ${URL} ${DIR_NAME}`;
  const cloneBranch = `git clone --depth 1 --branch=${BRANCH_NAME} ${URL} ${DIR_NAME}`;

  if (BRANCH_NAME !== '') {
    console.log(
      `Cloning branch ${BRANCH_NAME} from ${REPO_NAME} repo without history...`
    );
    exec(cloneBranch);
  } else {
    console.log(
      `Cloning default branch from ${REPO_NAME} repo without history...`
    );
    exec(cloneDefault);
  }

  console.log('Cloning... COMPLETE');
  return 0; // success
}

(function main() {
  if (args[0] === '-h' || args[0] === '--help') {
    help();
  } else if (args.length === 2 || args.length === 3) {
    gitCloneNoHistory();
  } else {
    console.log(
      `\nNot enough arguments:
      Please supply: repo-url, repo-branch (optional), & directory-name`
    );
    return 1; // error
  }
})();
