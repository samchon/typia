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
   * Structures held out of the OpenAPI validate matrix, and why each is out.
   *
   * This replaces three source-text scans (`"never"`, `"[key: "`,
   * `'<"uint32">'`) that the selector ran over each fixture's raw file.
   * Matching source text means prose decides coverage: a doc comment that
   * merely mentioned one of those words dropped a structure from the matrix
   * silently, with nothing to observe (#2136). The set below reproduces those
   * three scans exactly — the same 148 structures resolve to the same 83
   * validate and 80 equality cases.
   *
   * The reason belongs here rather than on the fixture because it describes the
   * emitted schema, not the fixture: nothing about `DynamicSimple` makes it
   * unfit to be a fixture, only what `typia.json.schema` produces for its index
   * signature and what `OpenApiValidator` can therefore see.
   *
   * Eight entries fail today if admitted, and four pass. Failing is not by
   * itself a validator gap, and the reasons here once said all eight were. Each
   * was measured by admitting it rather than reasoned about from its type.
   * `OpenApiValidator` sees only the emitted JSON schema, and every remaining
   * miss belongs to that schema rather than to the validator: either two types
   * emit one schema, or the schema is weaker than the type it came from.
   *
   * **Two types, one schema.** For `DynamicNever`, `DynamicUndefined`, and
   * `ObjectUndefined` the reasons below used to name three different causes,
   * none of them the real one (#2145). All three share one, and it is a schema
   * collision.
   *
   * A member or index-signature value typed `never` or `undefined` has no JSON
   * form, so typia erases it. What is left is byte-identical to the schema of a
   * type that never declared it: `DynamicNever` and an empty interface both
   * emit `{properties: {}, required: [], additionalProperties: false}`. Their
   * spoilers do not agree, though — `typia.validate<DynamicNever>` reports a
   * stray key as a type error against `[key: string]: never`, while the same
   * key against the empty interface is simply extra, and non-equals validation
   * ignores extras by design. Two types, one schema, two answers: no
   * schema-driven validator can give both, whatever it does with
   * `additionalProperties`. `ObjectUndefined` collides the same way, through
   * its erased `nothing` and `never` members.
   *
   * `ObjectUndefined` did also carry a real validator defect — an
   * `undefined`-valued key was reported as superfluous, which `typia.equals`
   * accepts — and #2145 fixed it, so it now passes the equality matrix. It
   * stays held out only because this one set feeds both matrices and it still
   * fails the validate matrix above. Splitting the set per matrix is #2136's
   * follow-up, which would also admit `TemplateInterpolationTagged` and
   * `TypeTagType`; both pass the equality matrix and are held out for a
   * validate-matrix reason.
   *
   * **Schemas weaker than their types.** The remaining five carry no collision;
   * their schema simply states less than the type does, so no validator could
   * reject the fixture's spoiler and the miss is the emitter's:
   *
   * - `DynamicComposite`, `DynamicTemplate`, `DynamicUnion` — an index signature
   *   emits `additionalProperties`, a single schema shared by every key. The
   *   normalized object schema has no `patternProperties`, so distinct key
   *   patterns and their distinct value types collapse into one union:
   *   `DynamicTemplate` becomes `additionalProperties: string | number |
   *   boolean`, which permits the spoiler `prefix_wrong: false` that its `[key:
   *   `prefix_${string}`]: string` member forbids. The over-approximation is
   *   forced by the target format, not a validator gap.
   * - `TypeTagType` — an integer width tag emits no range: `Type<"uint32">`
   *   becomes `{ type: "integer", minimum: 0 }` and `Type<"int32">` becomes a
   *   bare `{ type: "integer" }`. No upper bound is ever emitted, so the
   *   spoiler `uint = 4294967296` is inside every constraint the schema
   *   states.
   * - `TemplateInterpolationTagged` — a template literal emits a `pattern` for
   *   its structural shape alone, and the interpolated tags never reach it.
   *   `percent: `${number & Minimum<0> & Maximum<100>}%`` emits
   *   `^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?%)$`, which `"150%"` matches. The
   *   first miss is that `Maximum<100>`, not a `uint32` tag.
   *
   * The four marked `passes today` are measured to validate cleanly against
   * their own spoilers, and are held out only because admitting them changes
   * _which_ structures the matrix covers — a separate decision from _how_ they
   * are selected, left to #2136's follow-up.
   */
  const HELD_OUT: Record<string, string> = {
    // `additionalProperties` from an index signature
    DynamicArray: "index signature; passes today",
    DynamicComposite: "index signature; schema over-approximates the key types",
    DynamicNever: "index signature erased; schema collides with `{}`",
    DynamicSimple: "index signature; passes today",
    DynamicTemplate: "index signature; schema over-approximates the key types",
    DynamicUndefined: "index signature erased; schema collides with `{}`",
    DynamicUnion: "index signature; schema over-approximates the key types",
    ObjectDynamic: "index signature; passes today",
    // erased members, so the validate matrix cannot see their spoilers; the
    // equality matrix passes since #2145
    ObjectUndefined: "`undefined` and `never` members erased",
    // tag ranges that never reach the emitted schema
    ConstantAtomicTagged: "uint32 tag; passes today",
    TemplateInterpolationTagged: "interpolated tags absent from the pattern",
    TypeTagType: "integer width tags emit no range",
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
      // `Object.hasOwn`, not a truthiness test: a fixture named after an
      // `Object.prototype` member would otherwise resolve against the prototype
      // and be held out silently — the very failure this selector is shedding.
      if (Object.hasOwn(declarations, name) === false)
        throw new Error(`@typia/template does not export ${name}`);
      const structure: IStructureDeclaration = declarations[name]!;
      // Read what the fixture declares about itself, so that prose cannot
      // decide the matrix. `JSONABLE === false` marks a type whose value has no
      // faithful JSON form.
      if (structure.JSONABLE === false) continue;
      else if (Object.hasOwn(HELD_OUT, name)) continue;
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
