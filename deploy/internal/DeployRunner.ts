import chalk from "chalk";
import cp from "child_process";
import fs from "fs";

import * as ReplicaPublisher  from "./ReplicaPublisher.js";

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
    process.chdir(import.meta.dirname + "/../..");
    execLoudly({
      label: "typia",
      command: "npm run build",
    });
  }
  const version: string = props.setup
    ? await publish("test")
    : JSON.parse(
      await fs.promises.readFile(`${import.meta.dirname}/../../package.json`, "utf8"),
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
    await ReplicaPublisher.replica(props.tag);
  }
};

const execLoudly = (props: { label: string; command: string }): void => {
  console.log(chalk.magentaBright(`\nPS ${props.label}> ${props.command}`));
  cp.execSync(props.command, { stdio: "inherit" });
};

const publish = async (tag: string): Promise<string> => {
  // LOAD PACKAGE.JSON CONTENT
  const pack: any = JSON.parse(
    fs.readFileSync(`${import.meta.dirname}/../../package.json`, "utf8"),
  );
  const version: string = pack.version;
  const dev: boolean = version.includes("-dev.");
  if ((tag === "next" || tag === "patch") && !dev)
    throw new Error(`${tag} tag can only be used for dev versions.`);
    else if (tag === "latest" && dev)
      throw new Error("latest tag can only be used for non-dev versions.");

  // REMOVE PRIVATE FOR PUBLISHING
  delete pack.private;
  await fs.promises.writeFile(
    `${import.meta.dirname}/../../package.json`,
    JSON.stringify(pack, null, 2),
    "utf8",
  );
  if (tag !== "test")
    cp.execSync(
      `npm publish --tag ${tag}${tag === "latest" ? " --provenance" : ""}`,
      { stdio: "inherit" },
    );

  // RESTORE PRIVATE PROPERTY
  pack.private = true;
  fs.writeFileSync(
    `${import.meta.dirname}/../../package.json`,
    JSON.stringify(pack, null, 2),
    "utf8",
  );
  return version;
};

const test = async (props: {
  name: string;
  version: string;
  setup: boolean;
  commands: string[];
}): Promise<void> => {
  process.chdir(`${import.meta.dirname}/../../${props.name}`);
  if (props.setup) {
    if (fs.existsSync("node_modules/typia"))
      cp.execSync("npm uninstall typia --force", { stdio: "ignore" });

    const pack: any = JSON.parse(
      await fs.promises.readFile("package.json", "utf8"),
    );
    pack.dependencies ??= {};
    pack.dependencies.typia = `../`;
    await fs.promises.writeFile(
      "package.json",
      JSON.stringify(pack, null, 2),
      "utf8",
    );
  }
  if (props.commands.length) {
    if (props.setup)
      execLoudly({
        label: `@typia/${props.name}`,
        command: "npm install --force",
      });
    props.commands.forEach((command) =>
      execLoudly({ label: `@typia/${props.name}`, command }),
    );
  }
  process.chdir(import.meta.dirname + "/../..");
};

const title = (label: string): void => {
  console.log("");
  console.log("---------------------------------------------------------");
  console.log(` ${label}`);
  console.log("---------------------------------------------------------");
};
