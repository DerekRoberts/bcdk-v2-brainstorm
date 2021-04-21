# bcoc

BC Gov wrapper for OpenShift&#39;s oc CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg?style=for-the-badge)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bcoc.svg?style=for-the-badge)](https://npmjs.org/package/bcoc)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![Lifecycle](https://img.shields.io/badge/Lifecycle-Experimental-339999?style=for-the-badge)](https://img.shields.io/badge/Lifecycle-Experimental-339999)
[![MIT License](https://img.shields.io/github/license/bcgov/wps.svg?style=for-the-badge)](/LICENSE)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g bcoc
$ bcoc COMMAND
running command...
$ bcoc (-v|--version|version)
bcoc/0.0.0 linux-x64 node-v14.16.0
$ bcoc --help [COMMAND]
USAGE
  $ bcoc COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`bcoc generator [ENVFILE]`](#bcoc-generator-envfile)
- [`bcoc help [COMMAND]`](#bcoc-help-command)
- [`bcoc login`](#bcoc-login)

## `bcoc generator [ENVFILE]`

Generate base env file for use with bcoc

```
USAGE
  $ bcoc generator [ENVFILE]
```

_See code: [src/commands/generator.ts](https://github.com/derekroberts/bcoc/blob/v0.0.0/src/commands/generator.ts)_

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

Check for oc login, providing token link if necessary

```
USAGE
  $ bcoc login

EXAMPLE

       $ bcoc login
       > Logged in as: <USERNAME>
```

_See code: [src/commands/login.ts](https://github.com/derekroberts/bcoc/blob/v0.0.0/src/commands/login.ts)_

<!-- commandsstop -->
