import cp from "child_process";
import fs from "fs";

import { TestGlobal } from "../TestGlobal";
import { StringUtil } from "../utils/StringUtil";
import { TestStructure } from "../utils/TestStructure";
import { TestAutomationTemplate } from "./TestAutomationTemplate";
import { write_common } from "./writers/write_common";

export namespace TestAutomationBuilder {
  export const generate = async (): Promise<void> => {
    const location: string = `${TestGlobal.ROOT}/src/automated`;
    if (fs.existsSync(location))
      await fs.promises.rm(location, { recursive: true, force: true });
    await fs.promises.mkdir(location, { recursive: true });

    const structures: TestStructure<any>[] = await loadStructures();
    const templates: TestAutomationTemplate[] = TestAutomationTemplate.DATA;
    for (const tpl of templates)
      if (tpl.createOnly) await generateFeatureSet(tpl, structures, true);
      else {
        await generateFeatureSet(tpl, structures, false);
        if (tpl.creatable) await generateFeatureSet(tpl, structures, true);
      }
  };

  async function loadStructures(): Promise<TestStructure<any>[]> {
    const path: string = `${TestGlobal.ROOT}/src/structures`;
    const output: TestStructure<any>[] = [];

    for (const file of await fs.promises.readdir(path)) {
      const location: string = `${path}/${file}`;
      const modulo: Record<string, TestStructure<any>> = await import(location);
      output.push({
        ...Object.values(modulo)[0]!,
        name: file.substring(0, file.length - 3),
      });
    }
    return output;
  }

  async function generateFeatureSet(
    template: TestAutomationTemplate,
    structures: TestStructure<any>[],
    create: boolean,
  ): Promise<void> {
    const method: string = create
      ? `create${StringUtil.capitalize(template.method)}`
      : template.method;
    const path: string = [
      __dirname,
      "..",
      "src",
      "features",
      [
        template.prefix ? `${template.prefix}.` : "",
        template.module ? `${template.module}.` : "",
        method,
        template.custom === true ? "Custom" : "",
      ].join(""),
    ].join("/");

    if (fs.existsSync(path)) cp.execSync(`npx rimraf ${path}`);
    await fs.promises.mkdir(path, { recursive: true });

    for (const s of structures) {
      if (s.generate === undefined) continue;
      else if (template.jsonable && s.JSONABLE === false) continue;
      else if (template.strict && s.ADDABLE === false) continue;
      else if (template.module === "protobuf" && s.BINARABLE === false)
        continue;
      else if (template.query === true && s.QUERY !== true) continue;
      else if (template.headers === true && s.HEADERS !== true) continue;
      else if (template.formData === true && s.FORMDATA !== true) continue;
      else if (template.primitive && s.PRIMITIVE === false) continue;
      else if (template.resolved && s.RESOLVABLE === false) continue;
      else if (template.random && s.RANDOM === false) continue;
      else if (
        template.method.toLowerCase().includes("prune") &&
        s.ADDABLE === false
      )
        continue;
      else if (template.dynamic === false && s.name.startsWith("Dynamic"))
        continue;

      const location: string = `${path}/test_${
        template.prefix ? `${template.prefix}_` : ""
      }${
        template.module ? `${template.module}_` : ""
      }${method}${template.custom === true ? "Custom" : ""}_${s.name}.ts`;
      await fs.promises.writeFile(
        location,
        writeScript(template, method, s, create),
        "utf8",
      );
    }
  }

  function writeScript(
    feat: TestAutomationTemplate,
    method: string,
    struct: TestStructure<any>,
    create: boolean,
  ): string {
    const content: string = feat.programmer
      ? feat.programmer(create)(struct.name)
      : write_common({
          module: feat.module,
          prefix: feat.prefix,
          method,
        })(create)(struct.name);
    if (false === method.toLowerCase().includes("assert")) return content;

    method = method.replace("Async", "");
    const from: number = content.indexOf("export const");
    const to: number = content.indexOf("(", content.indexOf("_test", from + 1));
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
}
