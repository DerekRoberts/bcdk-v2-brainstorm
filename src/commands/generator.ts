import {Command, flags} from '@oclif/command'

export default class Generator extends Command {
  static description = 'describe the command here'

  // static flags = {
  //   help: flags.help({char: 'h'}),
  //   // flag with a value (-n, --name=VALUE)
  //   name: flags.string({char: 'n', description: 'name to print'}),
  //   // flag with no value (-f, --force)
  //   force: flags.boolean({char: 'f'}),
  // }

  // static args = [{name: 'file'}]

  async run() {
    const inquirer = require('inquirer')
    const questions = [
      {
        type: 'input',
        name: 'prefix',
        message: 'Application prefix:',
        validate: function (value) {
          if (value.match(/^[a-z0-9]+$/i)) {
            return true
          }
          return 'Please do not use spaces, tabs or special characters'
        },
      },
      {
        type: 'input',
        name: 'project',
        message: 'Project namespace:',
        validate: function (value) {
          if (value.match(/^[a-z0-9]+$/i)) {
            return true
          }
          return 'Please do not use spaces, tabs or special characters'
        },
      },
      {
        type: 'input',
        name: 'component',
        message: 'Initial component:',
        validate: function (value) {
          if (value.match(/^[a-z0-9]+$/i)) {
            return true
          }
          return 'Please do not use spaces, tabs or special characters'
        },
      },
      {
        type: 'list',
        name: 'pipeline',
        message: 'Pipeline tool:',
        choices: [
          {
            key: 'g',
            name: 'GitHub Actions',
            value: 'ghactions',
          },
          {
            key: 'j',
            name: 'Jenkins',
            value: 'jenkins',
          },
          {
            key: 'n',
            name: 'none',
            value: 'none',
          },
        ],
      },
    ]

    inquirer.prompt(questions).then(answers => {
      console.log('\nPrompted:')
      console.log(JSON.stringify(answers, null, ' '))
    })
  }
}
