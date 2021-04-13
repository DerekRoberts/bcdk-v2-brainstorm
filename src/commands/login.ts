import { Command, flags } from "@oclif/command";
let cmd = require("node-cmd");

export default class Login extends Command {
  static description =
    "Checks for oc login.  If necessary, provides a token link.";

  static examples = [
    `
$ bcoc login
> Logged in as: <USERNAME>
`,
  ];

  async run() {
    cmd.run(`oc whoami`, function (err, data, stderr) {
      if (stderr) {
        console.log("\nErr:", stderr);
      } else if (data) {
        console.log("\nLogged in as:", data);
      } else {
        console.log(
          "\nNot logged in.  Visit the link below to obtain a login token.",
          "\nhttps://oauth-openshift.apps.silver.devops.gov.bc.ca/oauth/token/request",
          "\n"
        );
      }
    });
  }
}
