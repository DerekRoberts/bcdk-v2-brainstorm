import { Command } from "@oclif/command";

export default class Login extends Command {
  static description = "Checks for oc login, providing token link if necessary";

  static examples = [
    `
    $ bcoc login
    > Logged in as: <USERNAME>
    `,
  ];

  async run() {
    const cmd = require("node-cmd");
    const { data } = cmd.runSync("oc whoami");
    if (data) {
      console.log("\nLogged in as:", data);
    } else {
      console.log(
        "\nNot logged in.  Visit the link below to obtain a login token.",
        "\nhttps://oauth-openshift.apps.silver.devops.gov.bc.ca/oauth/token/request",
        "\n"
      );
    }
  }
}
