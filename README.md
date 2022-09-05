# Git Clone No History

An `npm` script to clone a repository and reset the git history. This is done by removing the `.git` directory and then re-initializing a new git repository in the downloaded directory.

## Usage:

Invoke the cli executable using either of the two commands:

- `gcnh`
- `git-clone-no-history`

The command takes two or three arguments:

1. `<repo-url>` Url to the git repository
2. `<repo-branch>` OPTIONAL: Name of repository branch to clone
3. `<dir-name>` Name of directory to clone the branch to

Example Usage:

```bash
# Clone the "py-project" repository into the "myDirectory" directory
gcnh git@github.com:username/my-project.git myDirectory

# Clone the "second-branch" branch from the "my-project" repository into the "myDirectory" directory
gcnh git@github.com:username/my-project.git second-branch myDirectory
```

## Options:

Use the `-h` or `--help` options after the command to print out a help message in the terminal.

```bash
# Prints out help message for the CLI application
gcnh -h
```
