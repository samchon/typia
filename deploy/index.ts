import chalk from "chalk";
import cp from "child_process";
import fs from "fs";
import path from "path";

import { ReplicaPublisher } from "./internal/ReplicaPublisher";

const execute =
  (label: string) =>
  (command: string): void => {
    console.log(chalk.magentaBright(`\nPS ${label}> ${command}`));
    cp.execSync(command, { stdio: "inherit" });
  };

const publish = (tag: string): string => {
  // LOAD PACKAGE.JSON CONTENT
  const pack: any = JSON.parse(
    fs.readFileSync(`${__dirname}/../package.json`, "utf8"),
  );
  const version: string = pack.version;
  const dev: boolean = version.includes("-dev.");
  if ((tag === "next" || tag === "patch") && !dev)
    throw new Error(`${tag} tag can only be used for dev versions.`);
  else if (tag === "latest" && dev)
    throw new Error("latest tag can only be used for non-dev versions.");

  // REMOVE PRIVATE FOR PUBLISHING
  delete pack.private;
  fs.writeFileSync(
    `${__dirname}/../package.json`,
    JSON.stringify(pack, null, 2),
    "utf8",
  );
  try {
    if (tag === "tgz") cp.execSync("npm pack");
    else cp.execSync(`npm publish --tag ${tag}`);
  } catch {}

  // RESTORE PRIVATE PROPERTY
  pack.private = true;
  fs.writeFileSync(
    `${__dirname}/../package.json`,
    JSON.stringify(pack, null, 2),
    "utf8",
  );
  return version;
};

const test =
  (version: string) =>
  (name: string) =>
  (commands: string[]): void => {
    process.chdir(`${__dirname}/../${name}`);

    if (fs.existsSync("node_modules/typia"))
      cp.execSync("npm uninstall typia", { stdio: "ignore" });

    const pack: any = JSON.parse(fs.readFileSync("package.json", "utf8"));
    pack.dependencies ??= {};
    pack.dependencies.typia = path.resolve(
      `${__dirname}/../typia-${version}.tgz`,
    );
    fs.writeFileSync("package.json", JSON.stringify(pack, null, 2), "utf8");

    if (commands.length) {
      execute(`@typia/${name}`)("npm install");
      commands.forEach(execute(`@typia/${name}`));
    }
    process.chdir(__dirname + "/..");
  };

const title = (label: string): void => {
  console.log("");
  console.log("---------------------------------------------------------");
  console.log(` ${label}`);
  console.log("---------------------------------------------------------");
};

const main = (): void => {
  const tag: string | undefined = process.argv[2];
  if (tag === undefined) {
    console.log("specify tag name like latest or next");
    process.exit(-1);
  }

  // BUILD AND TEST
  title("BUILD THEM MAIN PROGRAM");
  process.chdir(__dirname + "/..");
  execute("typia")("npm run build");
  const version: string = publish("tgz");

  title("TEST AUTOMATION PROGRAM");
  test(version)("test")(
    tag === "tgz" && process.argv[3] === "template"
      ? ["npm run template", "npm run build", "npm start"]
      : ["npm run build:actions", "npm start"],
  );
  test(version)("errors")(["npm start"]);
  test(version)("benchmark")(["npm run build"]);

  // MAKE REPLICA REPO
  if (tag !== "tgz") {
    title("DEPLOY TO NPM");
    publish(tag);
    ["test", "errors", "benchmark"].forEach((name) => test(version)(name)([]));
    ReplicaPublisher.replica(tag);
  }
};
main();
