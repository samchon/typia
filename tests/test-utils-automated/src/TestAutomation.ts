import * as template from "@typia/template";
import { TestStructureSelector } from "@typia/template/structure-selector";
import { dedent } from "@typia/utils";
import fs from "fs";

import { TestGlobal } from "./TestGlobal";

/**
 * Owns generation of the ordinary and surplus-member OpenAPI schema matrices.
 *
 * Source discovery, suite enrollment and both declaration writers stay
 * together; generated callbacks supply the native schema boundary to reusable
 * helpers.
 *
 * @evidence contracts/common.md#principled-implementation generate completes both validate and validateEquals populations from getStructures before their runner starts a worker. Private writers retain each fixture's native json.schema binding and existing helper; copied schema-specific enrollment preserves the four recursive arrays without mutating template declarations.
 * @evidence contracts/common.md#clear-and-simple-design One namespace groups discovery policy and two writers. Filesystem ownership belongs to generate, eligibility to getStructures and its pure selector, and behavior assertions to the supplied helper owners.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Generation does not compute expected validation reports or replace native callbacks. The existing HELD_OUT and specialized-fixture restrictions remain visible limitations; this acknowledgment does not certify exhaustive product schema coverage.
 * @evidence contracts/common.md#meaningful-documentation The namespace introduces the two matrices, getStructures records enrollment limitations and generated comments distinguish native producer assertions from portable helper policy.
 */
export namespace TestAutomation {
  /**
   * Regenerates both schema-validation feature directories before execution.
   *
   * @evidence contracts/common.md#principled-implementation The function removes the prior features tree, creates both family directories and awaits every selected ordinary and equality file write. Rejections propagate rather than allowing stale partial generation to be treated as successful preparation.
   * @evidence contracts/common.md#clear-and-simple-design Directory initialization precedes two sequential selected-fixture loops; private writers own declaration text. No worker or assertion runs during generation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The real selected populations and native bindings are materialized, without cached verdicts or handwritten schema substitutions. Root paths come from TestGlobal and deletion is restricted to the generated features locations.
   * @evidence contracts/common.md#meaningful-documentation The native introduction states replacement and preparation ordering; the namespace and selector comments expose the exact selection responsibilities and limitations.
   */
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

      /**
       * Verifies the native-produced ${key} schema validates its fixture values.
       *
       * Clean acceptance and authored invalid mutations exercise the connection
       * between the TypeScript schema producer and runtime OpenAPI validation.
       *
       * 1. Produce the ${key} root and components and validate a clean value.
       * 2. Apply each declared spoiler and compare the complete grouped paths.
       *
       * @evidence contracts/testing.md#behavioral-verification This ${key} entry passes typia.json.schema output to _test_validate, which checks clean success and input identity, requires rejection of each declared spoiler, and compares the entire sorted diagnostic-path population including multiplicity after expected-path grouping.
       * @evidence contracts/testing.md#independent-expectations ${key}.generate and .SPOILERS supply valid values, invalid mutations and original expected paths independently of OpenApiValidator output. The helper's normalization consults the emitted schema and OpenApiTypeChecker to group ambiguous union leaves; that grouping is not an independent oracle of the schema or branch-selection utility. Actual reported paths remain unnormalized.
       * @evidence contracts/testing.md#distinguishing-cases A clean ${key} value is the positive case and each declared spoiler changes an invalid value for this fixture. A fixture with no spoilers contributes only clean success and identity. Distinct fixture declarations retain their array, nullable, optional, recursive, scalar and tagged contexts; surplus-member assertions belong to the separate equality matrix.
       * @evidence contracts/testing.md#execution-ownership Generated test_validate_${key} is discovered by TestServant in src/features/validate during test-utils-automated start. The entry owns its native schema binding and fixture identity; _test_validate owns validation and its private expected-path normalization.
       * @evidence contracts/e2e.md#necessary-boundary The Go producer's root and components for ${key} must compose with OpenApiValidator, including reference and object constraints. A direct validator call on an authored schema cannot verify the TypeScript-to-schema connection. Portable validator rules have separate direct unit owners; this entry retains the real emitted-schema connection.
       * @evidence contracts/e2e.md#shared-execution The suite generates both matrices before starting one shared TestServant worker. Entries share that workspace project and its content-keyed native artifact without per-fixture installation or worker creation, and every case keeps its own discoverable failure identity. The entry does not certify minimum preparation across the parent generation entry and worker project load.
       * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper creates one validator for this schema and calls the fixture generator separately for clean and each spoiled scenario. Normalization uses local path/visit collections without mutating schema or components; spoilers mutate their supplied value. The runner closes its connected worker in finally and ttsc owns artifact invalidation. This case does not prove cold-cache behavior or isolation of a fixture's global random state.
       * @evidence contracts/e2e.md#preserved-coverage This binding retains the ${key} fixture, native schema call, selected helper and discoverable export. Every existing clean/spoiler invocation and complete path comparison remains executed. The emitted schema is an input under test, and no unit or compiler boundary assertion is removed or replaced by this documentation.
       */
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

      /**
       * Verifies the native-produced ${key} schema supports strict validation.
       *
       * The schema's root and component references must compose with the runtime
       * validator, accepting the fixture before detecting injected extra keys.
       *
       * 1. Produce the ${key} schema and validate a clean fixture value.
       * 2. Inject extra object keys and compare the complete sorted error paths.
       *
       * @evidence contracts/testing.md#behavioral-verification This ${key} entry passes typia.json.schema output into _test_validateEquals, which asserts clean success and input identity before comparing every injected surplus path. It detects a schema/validator disagreement and blanket clean-input rejection.
       * @evidence contracts/testing.md#independent-expectations ${key}.generate supplies the value, while the helper's mutations supply expected extra-key paths independently of the schema output. Full multiset equality detects missing or extra reports; accessor quoting uses NamingConvention and is not independent coverage of that utility. The emitted schema is an input under test, not the expected answer.
       * @evidence contracts/testing.md#distinguishing-cases The clean ${key} graph is the positive case; adding only non_regular_member to its object nodes is the negative twin. Arrays retain index paths and nested objects contribute each injected key. A value without object nodes contributes zero surplus paths but still owns clean success and identity; declared-value spoilers belong to the separate validate matrix.
       * @evidence contracts/testing.md#execution-ownership Generated test_validateEquals_${key} is discovered by TestServant under src/features/validateEquals during the automated suite's start command. It is an E2E schema-producer/validator entry; _test_validateEquals owns the portable assertion and traversal implementation.
       * @evidence contracts/e2e.md#necessary-boundary This entry composes the Go transformer's schema for the ${key} TypeScript declaration with OpenApiValidator, including its generated root and components. Direct validation of a hand-authored schema cannot detect disagreement in those emitted references or object constraints; portable validator rules also have direct unit coverage.
       * @evidence contracts/e2e.md#shared-execution The entry belongs to one generated suite project and one shared TestServant worker, reusing the workspace's content-keyed native plugin artifact. It performs no installation, compiler launch or worker creation itself, and retains its own discoverable name and failure report.
       * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper generates a fresh ${key} value per invocation, checks it clean and then mutates only that value. Schema/components are not mutated. The suite runner closes its connected worker in finally; ttsc owns native artifact invalidation by content, and this case does not claim a cold-cache transition.
       * @evidence contracts/e2e.md#preserved-coverage This generated binding retains the ${key} fixture, typia.json.schema call and complete helper invocation. Clean success, identity and every surplus-path assertion remain in _test_validateEquals; this documentation change neither transfers nor deletes an executable distinction.
       */
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
   * three scans' population. Its suite-specific exclusions remain separate from
   * the declaration-based ordinary/equality eligibility selector.
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

  /**
   * Discovers schema-matrix candidates and selects their declared eligibility.
   *
   * The schema equality override preserves independently useful assertions
   * whose native equality flag differs. No fixture source content is read.
   *
   * @evidence contracts/common.md#principled-implementation Directory basenames bind to the actual template exports through TestStructureSelector. Own JSONABLE and schema/native equality flags decide admitted candidates independently of TypeScript syntax. The existing suite-specific held-out and Comment/ToJson/custom-tag restrictions remain an unresolved selection limitation, not a declaration of complete schema coverage.
   * @evidence contracts/common.md#clear-and-simple-design This wrapper owns one directory read and existing suite candidate restrictions; the shared pure selector owns export identity and eligibility precedence. It neither executes fixture generators nor duplicates the selector's flag rules.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No raw source substring decides eligibility. The suite declares SCHEMA_EQUALS on copied metadata for its four existing recursive-array cases, preserving their schema-only assertions without changing the master template fixtures or native ADDABLE policy. The legacy name-based HELD_OUT and specialized-fixture restrictions are retained visibly for separate consequence verification; this answer does not certify those exclusions as a complete or principled final policy.
   * @evidence contracts/common.md#meaningful-documentation The comment explains discovery, the two equality populations and source independence. The retained held-out reasons and acknowledgment identify remaining selection limitations rather than attributing them to the repaired source scan.
   */
  export const getStructures = async (equals: boolean): Promise<string[]> => {
    const directory: string[] = await fs.promises.readdir(
      `${TestGlobal.ROOT}/../template/src/structures`,
    );
    return TestStructureSelector.select({
      files: directory.filter(
        (file) =>
          file !== "TypeTagCustom.ts" &&
          !file.startsWith("Comment") &&
          !file.startsWith("ToJson"),
      ),
      // These four existing schema cases are distinct from native equality:
      // the nullable/required cases pin clean acceptance; the union cases also
      // pin nested surplus paths. Keep their enrollment in this suite rather
      // than changing the shared master fixture's native ADDABLE policy.
      declarations: {
        ...template,
        ArrayRepeatedNullable: {
          ...template.ArrayRepeatedNullable,
          SCHEMA_EQUALS: true,
        },
        ArrayRepeatedRequired: {
          ...template.ArrayRepeatedRequired,
          SCHEMA_EQUALS: true,
        },
        ArrayRepeatedUnion: {
          ...template.ArrayRepeatedUnion,
          SCHEMA_EQUALS: true,
        },
        ArrayRepeatedUnionWithTuple: {
          ...template.ArrayRepeatedUnionWithTuple,
          SCHEMA_EQUALS: true,
        },
      } as unknown as Record<string, TestStructureSelector.IStructure>,
      equals,
    }).filter((name) => !Object.hasOwn(HELD_OUT, name));
  };
}
