import {Command} from '@oclif/command'

export default class Generator extends Command {
  static description = 'Generate base env file for use with bcoc'

  static args = [{name: 'envFile'}]

  async run() {
    // https://www.npmjs.com/package/inquirer
    const inquirer = require('inquirer')

    const questions = [
      {
        type: 'input',
        name: 'prefix',
        message: 'Application prefix:',
        validate: function (value) {
          if (value.match(/^[a-z0-9]{3,32}$/i)) {
            return true
          }
          return 'Req: alphanumeric, 3-32 characters'
        },
      },
      {
        type: 'input',
        name: 'project',
        message: 'Project namespace:',
        validate: function (value) {
          if (value.match(/^[a-z0-9]{6,32}$/i)) {
            return true
          }
          return 'Req: alphanumeric, 6-32 characters'
        },
      },
      {
        type: 'input',
        name: 'component',
        message: 'Initial component:',
        validate: function (value) {
          if (value.match(/^[a-z0-9]{1,32}$/i)) {
            return true
          }
          return 'Req: alphanumeric, 1-32 characters'
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

    const saveFile = this.parse(Generator).args.envFile

    inquirer.prompt(questions).then(answers => {
      console.log(`\n${saveFile}\n`, answers)
      const confirm = {type: 'confirm', name: 'save', message: 'Save changes?', default: true}
      inquirer.prompt(confirm).then(a => {
        console.log(a)
        if (a.save == true) {
          require('fs').writeFile(
            saveFile ?? 'bcoc.env',
            JSON.stringify(answers, null, 2),
            err => !err || console.log(err)
          )
        } else {
          console.log('Changes not saved')
        }
      })
    })
  }
}
