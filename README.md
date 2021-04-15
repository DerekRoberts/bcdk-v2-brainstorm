bcoc
====

BC Gov wrapper for OpenShift&#39;s oc CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bcoc.svg)](https://npmjs.org/package/bcoc)
[![Downloads/week](https://img.shields.io/npm/dw/bcoc.svg)](https://npmjs.org/package/bcoc)
[![License](https://img.shields.io/npm/l/bcoc.svg)](https://github.com/DerekRoberts/bcdk-v2-brainstorm/blob/master/package.json)

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
bcoc/0.0.1 linux-x64 node-v10.19.0
$ bcoc --help [COMMAND]
USAGE
  $ bcoc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bcoc hello [FILE]`](#bcoc-hello-file)
* [`bcoc help [COMMAND]`](#bcoc-help-command)

## `bcoc hello [FILE]`

describe the command here

```
USAGE
  $ bcoc hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ bcoc hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/DerekRoberts/bcdk-v2-brainstorm/blob/v0.0.1/src/commands/hello.ts)_

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
<!-- commandsstop -->
