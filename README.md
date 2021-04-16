bcoc
====

BC Gov wrapper for OpenShift&#39;s oc CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bcoc.svg)](https://npmjs.org/package/bcoc)
[![Downloads/week](https://img.shields.io/npm/dw/bcoc.svg)](https://npmjs.org/package/bcoc)
[![License](https://img.shields.io/npm/l/bcoc.svg)](https://github.com/DerekRoberts/bcoc/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bcoc
$ bcoc COMMAND
running command...
$ bcoc (-v|--version|version)
bcoc/0.0.1 linux-x64 node-v14.16.0
$ bcoc --help [COMMAND]
USAGE
  $ bcoc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bcoc generator [FILE]`](#bcoc-generator-file)
* [`bcoc help [COMMAND]`](#bcoc-help-command)
* [`bcoc login`](#bcoc-login)

## `bcoc generator [FILE]`

describe the command here

```
USAGE
  $ bcoc generator [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/generator.ts](https://github.com/derekroberts/bcoc/blob/v0.0.1/src/commands/generator.ts)_

## `bcoc help [COMMAND]`

display help for bcoc

```
USAGE
  $ bcoc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `bcoc login`

Checks for oc login.  If necessary, provides a token link.

```
USAGE
  $ bcoc login

EXAMPLE

       $ bcoc login
       > Logged in as: <USERNAME>
```

_See code: [src/commands/login.ts](https://github.com/derekroberts/bcoc/blob/v0.0.1/src/commands/login.ts)_
<!-- commandsstop -->
