const fs = require("fs");

const clone = (container) => (lib) => {
  const write = (variable) => (file) => (content) =>
    fs.writeFileSync(
      file,
      `export const ${variable}: string = \`${content}\`;`,
      "utf8",
    );

  const packageJson = () => {
    const location = `${__dirname}/../node_modules/${lib}/package.json`;
    if (fs.existsSync(location) === false) return () => {};

    const directory = `${__dirname}/../raw/${lib}`;
    fs.mkdirSync(directory);
    write(`${lib}_packageJson`)(`${directory}/packageJson.ts`)(
      fs.readFileSync(location, "utf8"),
    );
    container.push({
      format: "json",
      name: `${lib}_packageJson`,
      import: `./${lib}/packageJson`,
      url: `file:///node_modules/${lib}/package.json`,
    });
  };
  if (packageJson() === false) return () => {};

  const iterate = (path) => {
    const directory = fs.readdirSync(
      `${__dirname}/../node_modules/${lib}/${path}`,
    );
    for (const file of directory) {
      const location = `${path}/${file}`;
      const from = `${__dirname}/../node_modules/${lib}/${location}`;
      const link = `${__dirname}/../raw/${lib}/${location}`;

      // CHECK DIRECTORY AND EXTENSION
      const stats = fs.statSync(from);
      if (stats.isDirectory()) {
        fs.mkdirSync(link);
        iterate(location);
        continue;
      } else if (file.endsWith(".d.ts") === false) continue;

      // COPY TEXT FILE
      const alias = `${lib}/${location.replace(".d.ts", "")}`;
      const name = alias.split("/").join("_");
      const content = fs.readFileSync(from, "utf8").split("`").join("\\`");
      write(name)(link.replace(".d.ts", ".ts"))(content);
      container.push({
        format: "ts",
        import: `./${alias}`,
        name,
        url: `file:///node_modules/${lib}/${location}`,
      });
    }
  };
  return (path) => {
    if (path.length) {
      fs.mkdirSync(`${__dirname}/../raw/${lib}/${path}`);
      write(`${lib}_index`)(`${__dirname}/../raw/${lib}/index.ts`)(
        [
          `export * from "./${path};`,
          `import * as ${lib} from "./${path}";`,
          `export default ${lib};`,
        ].join("\n"),
      );
      container.push({
        format: "ts",
        import: `./${lib}/index`,
        name: `${lib}_index`,
        url: `file:///node_modules/${lib}/index.d.ts`,
      });
    }
    return iterate(path);
  };
};

// PREPARE DIRECTORIES
if (fs.existsSync(__dirname + "/../raw"))
  fs.rmSync(__dirname + "/../raw", { recursive: true });
fs.mkdirSync(__dirname + "/../raw");

//----
// CLONE DEFINITIONS
//----
// CREATE RAW TEXT FILES
const bucket = [];
clone(bucket)("typia")("lib");

// COMBINE THEM ALL
const content = [
  ...bucket.map((b) => `import { ${b.name} } from "${b.import}";`),
  "",
  `export const RAW: [file: string, content: string][] = [`,
  ...bucket.map((b) => `  ["${b.url}", ${b.name}],`),
  `];`,
].join("\n");
fs.writeFileSync(__dirname + "/../raw/RAW.ts", content, "utf8");

//----
// CREATE INITIAL SCRIPT
//----
fs.writeFileSync(
  __dirname + "/../raw/SCRIPT.ts",
  `export const SCRIPT = \`import typia from "typia";

interface IMember {
    /** 
     * @format uuid 
     */ 
    id: string;

    /** 
     * @format email 
     */ 
    email: string;

    /**
     * @type uint
     * @minimum 20
     * @exclusiveMaximum 100
     */
    age: number;
    parent: IMember | null;
    children: IMember[];
}

//----
// IS
//----
typia.createIs<IMember>();

//----
// EQUALS
//----
typia.createEquals<IMember>();

//----
// RANDOM
//----
typia.createRandom<IMember>();

//----
// ASSERT-STRINGIFY
//----
typia.createAssertStringify<IMember>();

//----
// JSON SCHEMA
//----
typia.application<[IMember], "ajv">();
\``,
  "utf8",
);
