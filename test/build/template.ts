import cp from "child_process";
import fs from "fs";

import { TestFeature } from "./internal/TestFeature";
import { TestJsonApplicationGenerator } from "./internal/TestJsonApplicationGenerator";
import { TestProtobufMessageGenerator } from "./internal/TestProtobufMessageGenerator";
import { TestReflectMetadataGenerator } from "./internal/TestReflectMetadataGenerator";
import { TestStructure } from "./internal/TestStructure";
import { __TypeRemover } from "./internal/__TypeRemover";
import { write_common } from "./writers/write_common";

const emit = process.emit;
(process as any).emit = function (name: string, ...args: any[]) {
  if (name === "warning") return false;
  return emit.apply(process, [name, ...args] as any);
};

async function load(): Promise<TestStructure<any>[]> {
  const path: string = `${__dirname}/../src/structures`;
  const output: TestStructure<any>[] = [];

  for (const file of await fs.promises.readdir(path)) {
    const location: string = `${path}/${file}`;
    const modulo: Record<string, TestStructure<any>> = await import(location);
    output.push({
      ...Object.values(modulo)[0],
      name: file.substring(0, file.length - 3),
    });
  }
  return output;
}

async function generate(
  feat: TestFeature,
  structures: TestStructure<any>[],
  create: boolean,
): Promise<void> {
  const method: string = create
    ? `create${feat.method[0]!.toUpperCase()}${feat.method.slice(1)}`
    : feat.method;
  const path: string = [
    __dirname,
    "..",
    "src",
    "features",
    feat.module ? `${feat.module}.${method}` : method,
  ].join("/");

  if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
  await fs.promises.mkdir(path, { recursive: true });

  for (const s of structures) {
    if (s.generate === undefined) continue;
    else if (feat.jsonable && s.JSONABLE === false) continue;
    else if (feat.strict && s.ADDABLE === false) continue;
    else if (feat.module === "protobuf" && s.BINARABLE === false) continue;
    else if (feat.query === true && s.QUERY !== true) continue;
    else if (feat.headers === true && s.HEADERS !== true) continue;
    else if (feat.formData === true && s.FORMDATA !== true) continue;
    else if (feat.primitive && s.PRIMITIVE === false) continue;
    else if (feat.resolved && s.RESOLVABLE === false) continue;
    else if (feat.method.toLowerCase().includes("prune") && s.ADDABLE === false)
      continue;

    const location: string = `${path}/test_${
      feat.module ? `${feat.module}_` : ""
    }${method}_${s.name}.ts`;
    await fs.promises.writeFile(
      location,
      script(feat, method, s, create),
      "utf8",
    );
  }
}

function script(
  feat: TestFeature,
  method: string,
  struct: TestStructure<any>,
  create: boolean,
): string {
  if (feat.programmer) return feat.programmer(create)(struct.name);
  return write_common({
    module: feat.module,
    method,
  })(create)(struct.name);
}

async function main(): Promise<void> {
  process.chdir(__dirname + "/..");
  cp.execSync("npx rimraf src/generated");

  const structures: TestStructure<any>[] = await load();

  // NORMAL FEATURES
  for (const feature of TestFeature.DATA) {
    await generate(feature, structures, false);
    if (feature.creatable) await generate(feature, structures, true);
  }

  // SCHEMAS
  const schemas: string = `${__dirname}/../schemas`;
  if (fs.existsSync(schemas)) cp.execSync(`npx rimraf ${schemas}`);
  await fs.promises.mkdir(schemas, { recursive: true });

  await TestJsonApplicationGenerator.generate(structures);
  await TestProtobufMessageGenerator.generate(structures);
  await TestReflectMetadataGenerator.generate(structures);

  // FILL SCHEMA CONTENTS
  await new Promise((resolve) => setTimeout(resolve, 1000));
  cp.execSync("npm run build", { stdio: "inherit" });
  await TestJsonApplicationGenerator.schemas();
  await TestProtobufMessageGenerator.schemas();
  await TestReflectMetadataGenerator.schemas();

  // GENERATE TRANSFORMED FEATURES
  cp.execSync("npx rimraf src/generated");
  cp.execSync(
    [
      "npx typia generate",
      "--input src/features",
      "--output src/generated/output",
      "--project tsconfig.json",
    ].join(" "),
    { stdio: "inherit" },
  );
  await __TypeRemover.remove(__dirname + "/../src/generated");
  cp.execSync("npm run prettier", { stdio: "inherit" });
}
main().catch((exp) => {
  console.log(exp);
  process.exit(-1);
});
