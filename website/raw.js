const cp = require("child_process");
const fs = require("fs");

const create = (container) => (file) => (content) => {
  fs.writeFileSync(
    `raw/${file}.ts`,
    `export const ${file}: string = \`${content}\`;`,
    "utf8",
  );
  container.push({ name: file, import: file });
};
const take = (container) => (file) => {
  const from = `node_modules/typia/lib/${file}.d.ts`;
  const to = `raw/lib/${file}.ts`;
  const name = `lib_${file.split("/").join("_")}`;
  const content = fs.readFileSync(from, "utf8").split("`").join("\\`");

  fs.writeFileSync(
    to,
    `export const ${name}: string = \`${content}\`;`,
    "utf8",
  );
  container.push({ name, import: `lib/${file}` });
};
const iterate = (container) => (path) => (emender) => {
  fs.readdirSync(path)
    .filter((file) => file.endsWith(".d.ts") && file !== "transform.d.ts")
    .map((file) => file.replace(".d.ts", ""))
    .forEach((file) => take(container)(emender(file)));
};

// PREPARE DIRECTORIES
if (fs.existsSync("raw")) fs.rmdirSync("raw", { recursive: true });
fs.mkdirSync("raw");
fs.mkdirSync("raw/lib");
fs.mkdirSync("raw/lib/schemas");
fs.mkdirSync("raw/lib/metadata");
fs.mkdirSync("raw/lib/typings");

// CREATE RAW TEXT FILES
const bucket = [];
iterate(bucket)("node_modules/typia/lib")((file) => file);
iterate(bucket)("node_modules/typia/lib/schemas")((file) => `schemas/${file}`);
["Atomic", "Customizable"].forEach((file) => take(bucket)(`typings/${file}`));
["ICommentTag", "IJsDocTagInfo", "IMetadataTag"].forEach((file) =>
  take(bucket)(`metadata/${file}`),
);

create(bucket)("index")(
  [
    `export * from "./lib";`,
    `import typia from "./lib";`,
    `export default typia;`,
  ].join("\n"),
);
create(bucket)("packageJson")(
  fs.readFileSync("node_modules/typia/package.json", "utf8"),
);

// COMBINE THEM ALL
const content = [
  ...bucket.map((b) => `import { ${b.name} } from "./${b.import}";`),
  "",
  `export const RAW: [file: string, content: string][] = [`,
  ...bucket.map(
    (b) => `  ["file:///node_modules/typia/${b.import}.d.ts", ${b.name}],`,
  ),
  `];`,
].join("\n");
fs.writeFileSync("raw/RAW.ts", content, "utf8");

fs.writeFileSync(
  "raw/SCRIPT.ts",
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
