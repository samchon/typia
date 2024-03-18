const fs = require("fs");

const external = (container) => (config) => (lib) => {
  const write = (variable) => (file) => (content) =>
    fs.writeFileSync(
      file,
      `export const ${variable}: string = ${JSON.stringify(content)};`,
      "utf8",
    );

  const packageJson = () => {
    const location = `${__dirname}/../node_modules/${lib}/package.json`;
    const directory = `${__dirname}/../raw/${lib}`;
    fs.mkdirSync(directory);

    if (config.packageJson) {
      write(`${lib}_packageJson`)(`${directory}/packageJson.ts`)(
        fs.readFileSync(location, "utf8"),
      );
      container.push({
        format: "json",
        name: `${lib}_packageJson`,
        import: `./${lib}/packageJson`,
        url: `file:///node_modules/${lib}/package.json`,
      });
    }
    return true;
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
      } else if (
        file.endsWith(".d.ts") === false &&
        (config.javaScript === false || file.endsWith(".js") === false)
      )
        continue;
      else if (config.filter && config.filter(file) === false) continue;

      // COPY TEXT FILE
      const extension = location.endsWith(".d.ts") ? ".d.ts" : ".js";
      const alias = `${lib}/${location.replace(extension, extension === ".d.ts" ? "_d_ts" : "_js")}`;
      const name = alias.split("/").join("_").split(".").join("_");
      const content = fs.readFileSync(from, "utf8");
      write(name)(
        link.replace(extension, extension === ".d.ts" ? "_d_ts.ts" : "_js.ts"),
      )(content);
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
      if (config.index) {
        write(`${lib}_index`)(`${__dirname}/../raw/${lib}/index.ts`)(
          [
            `import * as ${lib} from "./${path}";`,
            `export * from "./${path}";`,
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
external(bucket)({
  packageJson: true,
  javaScript: true,
  index: true,
})("typia")("lib");
external(bucket)({
  packageJson: false,
  javaScript: false,
  index: false,
})("typescript")("lib");

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
  `export const SCRIPT = \`import typia, { tags } from "typia";

interface IMember {
  id: string & tags.Format<"uuid">;
  name: string;
  age: number &
    tags.Type<"uint32"> &
    tags.Minimum<20> &
    tags.ExclusiveMaximum<100>;
  parent: IMember | null;
  children: IMember[];
}

//----
// VALIDATION
//----
typia.createIs<IMember>();

//----
// RANDOM
//----
typia.createRandom<IMember>();

//----
// JSON
//----
typia.json.createStringify<IMember>();

//----
// PROTOCOL BUFFER
//----
typia.protobuf.createEncode<IMember>();  
\``,
  "utf8",
);
