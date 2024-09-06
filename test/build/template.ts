import cp from "child_process";
import fs from "fs";

import { TestFeature } from "./internal/TestFeature";
import { TestJsonSchemaGenerator } from "./internal/TestJsonSchemaGenerator";
import { TestLlmSchemaGenerator } from "./internal/TestLlmSchemaGenerator";
import { TestProtobufMessageGenerator } from "./internal/TestProtobufMessageGenerator";
import { TestReflectMetadataGenerator } from "./internal/TestReflectMetadataGenerator";
import { TestStructure } from "./internal/TestStructure";
import { StringUtil } from "./utils/StringUtil";
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
    ? `create${StringUtil.capitalize(feat.method)}`
    : feat.method;
  const path: string = [
    __dirname,
    "..",
    "src",
    "features",
    [
      feat.module ? `${feat.module}.${method}` : method,
      ...(feat.custom === true ? ["Custom"] : ""),
    ].join(""),
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
    else if (feat.random && s.RANDOM === false) continue;
    else if (feat.method.toLowerCase().includes("prune") && s.ADDABLE === false)
      continue;
    else if (feat.dynamic === false && s.name.startsWith("Dynamic")) continue;

    const location: string = `${path}/test_${
      feat.module ? `${feat.module}_` : ""
    }${method}${feat.custom === true ? "Custom" : ""}_${s.name}.ts`;
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
  const content: string = feat.programmer
    ? feat.programmer(create)(struct.name)
    : write_common({
        module: feat.module,
        method,
      })(create)(struct.name);
  if (false === method.toLowerCase().includes("assert")) return content;

  method = method.replace("Async", "");
  const from: number = content.indexOf("export const");
  const to: number = content.indexOf("(", from + 1);
  const replacer =
    feat.custom === true
      ? create === true
        ? (str: string) =>
            str.replace(
              `${method}<${struct.name}>()`,
              `${method}<${struct.name}>((p) => new CustomGuardError(p))`,
            )
        : feat.module === "functional"
          ? (str: string) =>
              str.replace(
                `${method}(p)`,
                `${method}(p, (p) => new CustomGuardError(p))`,
              )
          : (str: string) =>
              str.replace(
                `${method}<${struct.name}>(input)`,
                `${method}<${struct.name}>(input, (p) => new CustomGuardError(p))`,
              )
      : (str: string) => str;
  return [
    content.substring(0, from),
    feat.custom === true
      ? `import { CustomGuardError } from "../../internal/CustomGuardError";\n\n`
      : `import { TypeGuardError } from "typia";\n\n`,
    feat.custom === true
      ? content
          .substring(from, to)
          .replace(
            create ? StringUtil.capitalize(feat.method) : feat.method,
            create
              ? `${StringUtil.capitalize(feat.method)}Custom`
              : `${feat.method}Custom`,
          )
      : content.substring(from, to),
    feat.custom === true ? "(CustomGuardError)" : "(TypeGuardError)",
    replacer(content.substring(to)),
  ].join("");
}

async function main(): Promise<void> {
  process.chdir(__dirname + "/..");
  cp.execSync("npx rimraf src/generated");

  const structures: TestStructure<any>[] = await load();

  // NORMAL FEATURES
  const featureList: TestFeature[] = [
    ...TestFeature.DATA,
    ...TestFeature.DATA.filter((f) =>
      f.method.toLowerCase().includes("assert"),
    ).map((f) => ({
      ...f,
      custom: true as const,
    })),
  ];
  for (const feature of featureList) {
    await generate(feature, structures, false);
    if (feature.creatable) await generate(feature, structures, true);
  }

  // SCHEMAS
  const schemas: string = `${__dirname}/../schemas`;
  if (fs.existsSync(schemas)) cp.execSync(`npx rimraf ${schemas}`);
  await fs.promises.mkdir(schemas, { recursive: true });

  await TestJsonSchemaGenerator.generate(structures);
  await TestProtobufMessageGenerator.generate(structures);
  await TestReflectMetadataGenerator.generate(structures);
  await TestLlmSchemaGenerator.generate(structures);

  // FILL SCHEMA CONTENTS
  await new Promise((resolve) => setTimeout(resolve, 1000));
  cp.execSync("npm run build", { stdio: "inherit" });

  await TestJsonSchemaGenerator.schemas();
  await TestProtobufMessageGenerator.schemas();
  await TestReflectMetadataGenerator.schemas();
  await TestLlmSchemaGenerator.schemas();

  cp.execSync("npm run prettier", { stdio: "inherit" });
}
main().catch((exp) => {
  console.log(exp);
  process.exit(-1);
});
