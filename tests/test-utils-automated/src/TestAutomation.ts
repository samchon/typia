import * as template from "@typia/template";
import { dedent } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "./TestGlobal";

export namespace TestAutomation {
  export const generate = async (): Promise<void> => {
    const directories: string[] = [
      `${TestGlobal.ROOT}/src/features`,
      `${TestGlobal.ROOT}/src/features/validate`,
      `${TestGlobal.ROOT}/src/features/validateEquals`,
    ];
    for (const dir of directories) {
      if (fs.existsSync(dir))
        await fs.promises.rm(dir, { recursive: true, force: true });
      await fs.promises.mkdir(dir, { recursive: true });
    }

    for (const s of await getStructures(false)) await generateValidate(s);
    for (const s of await getStructures(true)) await generateValidateEquals(s);
  };

  const generateValidate = async (key: string): Promise<void> => {
    const content: string = dedent`
      import { ${key} } from "@typia/template";
      import typia from "typia";

      import { _test_validate } from "../../internal/_test_validate";

      export const test_validate_${key} = () => _test_validate<${key}>({
        ...typia.json.schema<${key}>(),
        factory: ${key},
        name: "${key}",  
      });
    `;
    await fs.promises.writeFile(
      `${TestGlobal.ROOT}/src/features/validate/test_validate_${key}.ts`,
      content,
    );
  };

  const generateValidateEquals = async (key: string): Promise<void> => {
    const content: string = dedent`
      import { ${key} } from "@typia/template";
      import typia from "typia";

      import { _test_validateEquals } from "../../internal/_test_validateEquals";

      export const test_validateEquals_${key} = () => _test_validateEquals<${key}>({
        ...typia.json.schema<${key}>(),
        factory: ${key},
        name: "${key}",  
      });
    `;
    await fs.promises.writeFile(
      `${TestGlobal.ROOT}/src/features/validateEquals/test_validateEquals_${key}.ts`,
      content,
    );
  };

  /**
   * Structures the OpenAPI validate matrix cannot cover yet.
   *
   * Each entry names a `typia.json.schema` output that `OpenApiValidator` does
   * not round-trip faithfully, so the fixture is skipped rather than asserted.
   * The reason is recorded per fixture because it is a property of the
   * validator's coverage, not of the fixture: nothing about `DynamicSimple`
   * makes it unfit to be a fixture, only the validator's handling of the
   * `additionalProperties` schema its type produces.
   *
   * These replace the source-text scans (`"never"`, `"[key: "`, `'<"uint32">'`)
   * this selector used to run over each fixture's raw file, where a doc comment
   * that merely mentioned one of those words silently changed matrix membership
   * (#2136). Membership is byte-identical to those scans.
   *
   * Four entries are marked `passes today`: they were excluded when the matrix
   * was introduced (#1736) and now validate cleanly against their own spoilers.
   * They stay listed because admitting them changes *which* structures the
   * matrix covers, which is a separate decision from *how* they are selected.
   */
  const UNVALIDATABLE: Record<string, string> = {
    // `additionalProperties` from an index signature
    DynamicArray: "index signature; passes today",
    DynamicComposite: "index signature",
    DynamicNever: "index signature over a `never` member",
    DynamicSimple: "index signature; passes today",
    DynamicTemplate: "index signature",
    DynamicUndefined: "index signature",
    DynamicUnion: "index signature",
    ObjectDynamic: "index signature; passes today",
    // a `never` member erased from the emitted schema
    ObjectUndefined: "`never` member",
    // integer format tags the validator does not enforce
    ConstantAtomicTagged: "uint32 tag; passes today",
    TemplateInterpolationTagged: "uint32 tag",
    TypeTagType: "uint32 and uint64 tags",
  };

  export const getStructures = async (equals: boolean): Promise<string[]> => {
    const directory: string[] = await fs.promises.readdir(
      `${TestGlobal.ROOT}/../template/src/structures`,
    );
    const declarations: Record<string, IStructureDeclaration> =
      template as unknown as Record<string, IStructureDeclaration>;
    const result: string[] = [];
    for (const file of directory) {
      if (
        file.endsWith(".ts") === false ||
        file === "index.ts" ||
        file === "TypeTagCustom.ts" ||
        file.startsWith("Comment") ||
        file.startsWith("ToJson")
      )
        continue;
      const name: string = file.substring(0, file.length - 3);
      const structure: IStructureDeclaration | undefined = declarations[name];
      if (structure === undefined)
        throw new Error(`@typia/template does not export ${name}`);
      // Read what the fixture declares about itself, so that prose cannot
      // decide the matrix. `JSONABLE === false` marks a type whose value has no
      // faithful JSON form.
      if (structure.JSONABLE === false) continue;
      else if (UNVALIDATABLE[name] !== undefined) continue;
      // `ADDABLE` is still read from source text, and deliberately so: four
      // fixtures spell it `ADDABLE: boolean = false`, which this scan does not
      // match, so they sit in the equality matrix despite declaring otherwise.
      // Reading the declaration instead would drop them — and two of the four
      // (ArrayRepeatedUnion, ArrayRepeatedUnionWithTuple) assert 270 superfluous
      // paths each, so the "faithful" read silently deletes real coverage. That
      // is a decision about *which* structures the matrix covers, so it is left
      // to #2136's follow-up rather than smuggled in behind a refactor.
      else if (equals === true) {
        const content: string = await fs.promises.readFile(
          `${TestGlobal.ROOT}/../template/src/structures/${file}`,
          "utf-8",
        );
        if (content.includes("ADDABLE = false")) continue;
      }
      result.push(name);
    }
    return result;
  };
}

/**
 * The part of a `@typia/template` structure this selector reads.
 *
 * Mirrors `TestAutomationMetadata` in `test-typia-automated`, which narrows the
 * same namespaces to the flags its own matrix consumes. Only declared members
 * belong here: a flag this selector does not read would be dead configuration.
 */
interface IStructureDeclaration {
  JSONABLE?: boolean;
}
