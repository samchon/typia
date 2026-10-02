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
 * @evidence contracts/testing.md#behavioral-verification This namespace prepares inputs rather than asserting product behavior. loadMetadata rejects a missing exported fixture, generateFeatureSet binds eligible authored fixtures, and writeScript preserves assertion/error callback imports; test_direct_factory_matrix checks completed enrollment and the generated helpers assert runtime results.
 * @evidence contracts/testing.md#independent-expectations Authored operation capability flags and fixture metadata determine generation. No emitted callback result supplies an expected value; runtime helpers own their fixture, platform or reference-codec oracles and their documented limits.
 * @evidence contracts/testing.md#distinguishing-cases createOnly, creatable and capability flags choose supported halves and fixtures; missing fixture exports and rejected writes fail preparation. The controller does not independently test each eligibility branch; the explicit direct/factory regression checks active operation enrollment.
 * @evidence contracts/testing.md#execution-ownership generate and main invoke iterate. Private loadMetadata, generateFeatureSet and writeScript callbacks belong to this namespace's preparation path; completed generated exports and authored composites are executed by the caller's TestServant rather than here.
 */
export namespace TestAutomationController {
  /**
   * Replaces generated features and visits every completed family in order.
   *
   * A rejected write or visit stops preparation; the caller must not execute a
   * partially generated project as a successful matrix. Composites are
   * retained.
   *
   * @evidence contracts/testing.md#behavioral-verification iterate awaits generation and visitation without computing a product verdict. test_direct_factory_matrix receives its completed locations and checks supported direct/factory enrollment; later TestServant executions own actual callback assertions.
   * @evidence contracts/testing.md#independent-expectations Fixture export metadata and configured operation flags establish the generated population before callbacks run. This operation does not create expected decoded data, schemas or diagnostic paths from emitted output.
   * @evidence contracts/testing.md#distinguishing-cases It replaces only generated features, distinguishes create-only from direct/factory descriptors and retains authored composites. A rejected generation or visit stops preparation; partial generated output is not treated as a complete run.
   * @evidence contracts/testing.md#execution-ownership The package generate entry supplies a no-op visitor; main collects completed directory paths before opening one worker. Private metadata, eligibility and source-rendering operations execute as this awaited preparation, while every generated case retains its separate matching export.
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
