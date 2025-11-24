import chalk from "chalk";
import cp from "child_process";
import fs from "fs";

export namespace DeployRunner {
  export const main = async (props: {
    tag: string;
    setup: boolean;
    testExecutors: Array<{
      name: string;
      commands: string[];
    }>;
    publish: boolean;
  }): Promise<void> => {
    if (props.setup) {
      title("BUILD THE MAIN PROGRAM");
      process.chdir(__dirname + "/../..");
      execLoudly({
        label: "typia",
        command: "pnpm run build",
      });
    }
    const version: string = props.setup
      ? await publish("test")
      : JSON.parse(
          await fs.promises.readFile(`${__dirname}/../../package.json`, "utf8"),
        ).version;

    title("TEST AUTOMATION PROGRAM");
    for (const arg of props.testExecutors)
      await test({
        name: arg.name,
        commands: arg.commands,
        setup: props.setup,
        version,
      });

    if (props.publish) {
      title("DEPLOY TO NPM");
      await publish(props.tag);
    }
  };

  const execLoudly = (props: { label: string; command: string }): void => {
    console.log(chalk.magentaBright(`\nPS ${props.label}> ${props.command}`));
    cp.execSync(props.command, { stdio: "inherit" });
  };

  const publish = async (tag: string): Promise<string> => {
    // LOAD PACKAGE.JSON CONTENT
    const load = () =>
      JSON.parse(fs.readFileSync(`${__dirname}/../../package.json`, "utf8"));
    const original: any = load();
    const pack: any = load();
    delete pack.private;

    // CHECK VERSION AND TAG
    const version: string = pack.version;
    const dev: boolean = version.includes("-dev.");
    if ((tag === "next" || tag === "patch") && !dev)
      throw new Error(`${tag} tag can only be used for dev versions.`);
    else if (tag === "latest" && dev)
      throw new Error("latest tag can only be used for non-dev versions.");

    try {
      await fs.promises.writeFile(
        `${__dirname}/../../package.json`,
        JSON.stringify(pack, null, 2),
        "utf8",
      );
      if (tag !== "test")
        cp.execSync(`npm publish --tag ${tag}`, { stdio: "inherit" });
      return version;
    } catch (error) {
      throw error;
    } finally {
      // RESTORE PRIVATE PROPERTY
      await fs.promises.writeFile(
        `${__dirname}/../../package.json`,
        JSON.stringify(original, null, 2),
        "utf8",
      );
    }
  };

  const test = async (props: {
    name: string;
    version: string;
    setup: boolean;
    commands: string[];
  }): Promise<void> => {
    process.chdir(`${__dirname}/../../${props.name}`);
    if (props.setup)
      execLoudly({
        label: `@typia/${props.name}`,
        command: "pnpm install --force",
      });
    if (props.commands.length)
      props.commands.forEach((command) =>
        execLoudly({ label: `@typia/${props.name}`, command }),
      );
    process.chdir(__dirname + "/../..");
  };

  const title = (label: string): void => {
    console.log("");
    console.log("---------------------------------------------------------");
    console.log(` ${label}`);
    console.log("---------------------------------------------------------");
  };
}
