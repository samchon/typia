import cp from "child_process";
import fs from "fs";

export namespace ReplicaPublisher {
  export const replica = async (tag: string): Promise<void> => {
    // PREPARE DIRECTORY
    if (fs.existsSync(LEGACY)) cp.execSync(`rimraf ${LEGACY}`);
    await fs.promises.mkdir(LEGACY);

    // COPY ESSENTIAL FILES
    for (const file of ["package.json", "LICENSE", "tsconfig.json"])
      await fs.promises.copyFile(`${ROOT}/${file}`, `${LEGACY}/${file}`);
    await readme();

    // CREATE RE-EXPORT FILES
    await fs.promises.mkdir(`${LEGACY}/src`);
    await link(LIB, `${LEGACY}/src`);

    // CHANGE PACKAGE.JSON CONTENT
    await pack();

    // DO BUILD & PUBLISH
    try {
      cp.execSync("npx tsc", { cwd: LEGACY });
    } catch {}

    console.log("publish typescript-json (replica)");
    publish(`npm publish --tag ${tag}`);
  };

  const readme = async (): Promise<void> => {
    const content: string = await fs.promises.readFile(
      `${ROOT}/README.md`,
      "utf8",
    );
    await fs.promises.writeFile(
      `${LEGACY}/README.md`,
      "> ## Deprecated\n" +
        "> `typescript-json` has been renamed to [`typia`](https://github.com/samchon/typia)" +
        "\n\n" +
        content,
      "utf8",
    );
  };

  const link = async (lib: string, src: string): Promise<void> => {
    const directory: string[] = await fs.promises.readdir(lib);
    for (const file of directory) {
      const from: string = `${lib}/${file}`;
      const to: string = `${src}/${file}`;
      const stat: fs.Stats = fs.statSync(from);

      if (stat.isDirectory() && file !== "executable") {
        await fs.promises.mkdir(to);
        await link(from, to);
      } else if (file.substring(file.length - 5) === ".d.ts")
        await fs.promises.writeFile(
          to.substring(0, to.length - 5) + ".ts",
          from === `${LIB}/index.d.ts`
            ? `import typia from "typia";\n` +
                `export default typia;\n` +
                `export * from "typia";\n`
            : from === `${LIB}/transform.d.ts`
              ? `import transform from "typia/lib/transform";\n` +
                `export default transform;\n`
              : `export * from "typia/lib${from.substring(
                  LIB.length,
                  from.length - 5,
                )}";`,
          "utf8",
        );
    }
  };

  const pack = async (): Promise<void> => {
    const pack: any = JSON.parse(
      await fs.promises.readFile(`${LEGACY}/package.json`, "utf8"),
    );
    pack.name = "typescript-json";
    pack.dependencies = {
      typia: pack.version,
    };
    delete pack.private;
    delete pack.devDependencies;
    delete pack.bin;
    delete pack.module;

    await fs.promises.writeFile(
      `${LEGACY}/package.json`,
      JSON.stringify(pack, null, 2),
      "utf8",
    );
  };

  function publish(command: string): void {
    try {
      cp.execSync(command, {
        cwd: LEGACY,
        stdio: "inherit",
      });
    } catch {}
  }
}

const ROOT: string = __dirname + "/../..";
const LEGACY: string = ROOT + "/packages/typescript-json";
const LIB = `${__dirname}/../../lib`;
