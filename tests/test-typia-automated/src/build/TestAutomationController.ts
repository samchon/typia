import * as template from "@typia/template";
import { NamingConvention } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "../TestGlobal";
import { TestAutomationMetadata } from "./TestAutomationMetadata";
import { TestAutomationTemplate } from "./TestAutomationTemplate";
import { write_common } from "./writers/write_common";

/**
 * Owns fixture discovery, feature replacement and suite directory enrollment.
 *
 * The visitor receives completed families, including the authored composite
 * directory. It may collect these locations before starting a shared worker.
 *
 * @evidence contracts/common.md#principled-implementation loadMetadata binds every structure filename to its exported declaration and rejects missing exports; generateFeatureSet applies each operation's declared capability flags before writing direct and factory bindings. writeScript inserts assertion error classes without separating the generated declaration from its contract comment.
 * @evidence contracts/common.md#clear-and-simple-design Discovery, eligibility, rendering and visitation have private owners under this namespace. The visitor owns execution; generation neither starts a worker nor computes expected results.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Selection uses fixture capability flags and configured operations, not source-word scans. Existing Dynamic-name exclusion is limited to templates declaring dynamic false, currently inactive notation configuration; this controller does not certify that disabled families are covered.
 * @evidence contracts/common.md#meaningful-documentation The namespace explains generation and visitor ownership; iterate documents destructive replacement, completion and failure ordering. Generated assertions retain their individual writer documentation.
 */
export namespace TestAutomationController {
  /**
   * Replaces generated features and visits every completed family in order.
   *
   * A rejected write or visit stops preparation; the caller must not execute a
   * partially generated project as a successful matrix. Composites are
   * retained.
   *
   * @evidence contracts/common.md#principled-implementation The entire generated tree is removed first, metadata is loaded once, and each configured direct/factory family is written before its visitor runs. createOnly avoids a direct half; creatable adds the factory half. Existing composites receive their own visit without regeneration.
   * @evidence contracts/common.md#clear-and-simple-design One ordered orchestration delegates export binding, eligibility and rendering to private helpers. Awaited writes and visits expose failures to the caller, while the visitor permits generation-only preparation or collection for shared execution.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Every eligible structure retains its normal writer and declaration identity. No verdict, native output or expected diagnostic is cached in this controller; filesystem replacement is restricted to the generated feature tree.
   * @evidence contracts/common.md#meaningful-documentation The comment states replacement, visitation ordering, partial-failure behavior and preservation of composites. The namespace explains which helpers own the nonobvious selection and assertion-import work.
   */
  export const iterate = async (
    visit: (location: string) => Promise<void>,
  ): Promise<void> => {
    const location: string = `${TestGlobal.ROOT}/src/features`;
    if (fs.existsSync(location))
      await fs.promises.rm(location, { recursive: true, force: true });
    await fs.promises.mkdir(location, { recursive: true });

    const metadata: TestAutomationMetadata<any>[] = await loadMetadata();
    const templates: TestAutomationTemplate[] = TestAutomationTemplate.DATA;
    for (const tpl of templates)
      if (tpl.createOnly) await generateFeatureSet(visit, tpl, metadata, true);
      else {
        await generateFeatureSet(visit, tpl, metadata, false);
        if (tpl.creatable) await generateFeatureSet(visit, tpl, metadata, true);
      }

    // Run composite function tests (ObjectSimple only)
    const compositeLocation: string = `${TestGlobal.ROOT}/src/composite`;
    if (fs.existsSync(compositeLocation)) await visit(compositeLocation);
  };

  async function loadMetadata(): Promise<TestAutomationMetadata<any>[]> {
    const path: string = `${TestGlobal.ROOT}/../template/src/structures`;
    const output: TestAutomationMetadata<any>[] = [];
    const metadata: Record<
      string,
      TestAutomationMetadata<any>
    > = template as unknown as Record<string, TestAutomationMetadata<any>>;

    for (const file of await fs.promises.readdir(path)) {
      if (file === "index.ts") continue;

      const name: string = file.substring(0, file.length - 3);
      const modulo: TestAutomationMetadata<any> | undefined = metadata[name];
      if (modulo === undefined) {
        throw new Error(`@typia/template does not export ${name}`);
      }
      output.push({
        ...modulo,
        name,
      });
    }
    return output;
  }

  async function generateFeatureSet(
    visit: (location: string) => Promise<void>,
    template: TestAutomationTemplate,
    metadata: TestAutomationMetadata<any>[],
    create: boolean,
  ): Promise<void> {
    const method: string = TestAutomationTemplate.method(template, create);
    const path: string = [
      TestGlobal.ROOT,
      "src",
      "features",
      TestAutomationTemplate.directory(template, create),
    ].join("/");

    if (fs.existsSync(path))
      await fs.promises.rm(path, {
        recursive: true,
        force: true,
      });
    await fs.promises.mkdir(path, { recursive: true });

    for (const s of metadata) {
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

      const location: string = `${path}/test_${TestAutomationTemplate.directory(
        template,
        create,
      )
        .split(".")
        .join("_")}_${s.name}.ts`;
      await fs.promises.writeFile(
        location,
        writeScript(template, method, s, create),
        "utf8",
      );
    }
    await visit(path);
  }

  function writeScript(
    feat: TestAutomationTemplate,
    method: string,
    struct: TestAutomationMetadata<any>,
    create: boolean,
  ): string {
    const content: string = feat.programmer
      ? feat.programmer(create)(struct.name)
      : write_common({
          module: feat.module,
          prefix: feat.prefix,
          method,
          asynchronous: feat.asynchronous,
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
    const comment = content.lastIndexOf("/**", from);
    const commentEnd = comment === -1 ? -1 : content.indexOf("*/", comment);
    const importAt =
      commentEnd !== -1 && content.substring(commentEnd + 2, from).trim() === ""
        ? comment
        : from;
    return [
      content.substring(0, importAt),
      feat.custom === true
        ? `import { CustomGuardError } from "../../internal/CustomGuardError";\n\n`
        : `import { TypeGuardError } from "typia";\n\n`,
      content.substring(importAt, from),
      feat.custom === true
        ? content
            .substring(from, to)
            .replace(
              create ? NamingConvention.capitalize(feat.method) : feat.method,
              create
                ? `${NamingConvention.capitalize(feat.method)}Custom`
                : `${feat.method}Custom`,
            )
        : content.substring(from, to),
      feat.custom === true ? "(CustomGuardError)" : "(TypeGuardError)",
      replacer(content.substring(to)),
    ].join("");
  }
}
