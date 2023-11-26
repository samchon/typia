import cp from "child_process";
import fs from "fs";

export namespace ReplicaPublisher {
  export function replica(tag: string): void {
    // PREPARE DIRECTORY
    if (fs.existsSync(LEGACY)) cp.execSync(`rimraf ${LEGACY}`);
    fs.mkdirSync(LEGACY);

    // COPY ESSENTIAL FILES
    for (const file of ["package.json", "LICENSE", "tsconfig.json"])
      fs.copyFileSync(`${ROOT}/${file}`, `${LEGACY}/${file}`);
    readme();

    // CREATE RE-EXPORT FILES
    fs.mkdirSync(`${LEGACY}/src`);
    link(LIB, `${LEGACY}/src`);

    // CHANGE PACKAGE.JSON CONTENT
    pack();

    // DO BUILD & PUBLISH
    try {
      cp.execSync("npx tsc", { cwd: LEGACY });
    } catch {}

    console.log("publish typescript-json (replica)");
    publish(`npm publish --tag ${tag}`);
  }

  function readme(): void {
    const content: string = fs.readFileSync(`${ROOT}/README.md`, "utf8");
    fs.writeFileSync(
      `${LEGACY}/README.md`,
      "> ## Deprecated\n" +
        "> `typescript-json` has been renamed to [`typia`](https://github.com/samchon/typia)" +
        "\n\n" +
        content,
      "utf8",
    );
  }

  function link(lib: string, src: string): void {
    const directory: string[] = fs.readdirSync(lib);
    for (const file of directory) {
      const from: string = `${lib}/${file}`;
      const to: string = `${src}/${file}`;
      const stat: fs.Stats = fs.statSync(from);

      if (stat.isDirectory() && file !== "executable") {
        fs.mkdirSync(to);
        link(from, to);
      } else if (file.substring(file.length - 5) === ".d.ts")
        fs.writeFileSync(
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
  }

  function pack(): void {
    const pack: any = JSON.parse(
      fs.readFileSync(`${LEGACY}/package.json`, "utf8"),
    );

    pack.name = "typescript-json";
    pack.dependencies = {
      typia: pack.version,
    };
    delete pack.private;
    delete pack.devDependencies;
    delete pack.bin;

    fs.writeFileSync(
      `${LEGACY}/package.json`,
      JSON.stringify(pack, null, 2),
      "utf8",
    );
  }

  function publish(command: string): void {
    try {
      cp.execSync(command, {
        cwd: LEGACY,
      });
    } catch {}
  }
}

const ROOT: string = __dirname + "/../..";
const LEGACY: string = ROOT + "/packages/typescript-json";
const LIB = `${__dirname}/../../lib`;
