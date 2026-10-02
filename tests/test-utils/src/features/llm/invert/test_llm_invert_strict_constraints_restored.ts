import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { tags } from "typia";

/**
 * Verifies strict inversion still restores every shifted constraint keyword.
 *
 * Under `strict`, `OpenApiConstraintShifter` deletes the constraint keywords
 * and writes them into the description as `@minimum 3` tags, so the inverter is
 * the only thing that can put them back. Gating the read on `strict` — the same
 * gate the write uses — must not weaken that half: all thirteen keywords have
 * to survive the round trip, and the consumed tags must leave the description
 * behind as plain prose. `format` and `pattern` are mutually exclusive tags, so
 * they live on separate string leaves (`thumbnail` and `homepage`).
 *
 * Each keyword is asserted on its own rather than as one object, so a failure
 * names the keyword that was not restored. (The one-way `TestValidator.equals`
 * once made an unrestored leaf pass as an object; the suites now compare
 * symmetrically, #2401.)
 *
 * 1. Convert a fully tagged interface to strict LLM parameters.
 * 2. Invert it back with `config.strict` set, matching the conversion.
 * 3. Assert each of the thirteen numeric, string, and array keywords is restored.
 * 4. Assert each leaf's description keeps its prose and drops its tags.
 *
 * @evidence contracts/testing.md#behavioral-verification Strict LLM schemas, where constraints live in the description, are inverted and each of thirteen keywords is asserted on its own with a message naming it; consumed tags must leave plain prose.
 * @evidence contracts/testing.md#independent-expectations The expected values are the tags declared on the TypeScript type, and the schemas come from the native producer in strict mode.
 * @evidence contracts/testing.md#distinguishing-cases Every keyword has its own assertion and format and pattern sit on separate leaves; the non-strict twin is a separate case.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.llm.schema in strict mode is produced by the native transform; the inversion runs in process.
 * @evidence contracts/e2e.md#necessary-boundary Strict native LLM schema output reaches invert. Thirteen authored keywords and five descriptions distinguish loss of strict description encoding at this actual connection.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_llm_invert_strict_constraints_restored = (): void => {
  interface IMember {
    /** How old the member is. */
    age: number & tags.Minimum<0> & tags.Maximum<100> & tags.MultipleOf<5>;
    /** How much the member scored. */
    score: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>;
    /** Where to reach the member. */
    thumbnail: string &
      tags.Format<"uri"> &
      tags.ContentMediaType<"image/png"> &
      tags.MinLength<8> &
      tags.MaxLength<255>;
    /** The member's homepage. */
    homepage: string & tags.Pattern<"^https://">;
    /** What the member likes. */
    hobbies: Array<string> &
      tags.MinItems<1> &
      tags.MaxItems<10> &
      tags.UniqueItems;
  }
  const parameters = typia.llm.parameters<IMember, { strict: true }>();
  const inverted = LlmSchemaConverter.invert({
    config: { strict: true },
    components: {},
    schema: parameters,
    $defs: parameters.$defs,
  }) as OpenApi.IJsonSchema.IObject;

  const properties = inverted.properties!;
  const age = properties.age as OpenApi.IJsonSchema.INumber;
  const score = properties.score as OpenApi.IJsonSchema.INumber;
  const thumbnail = properties.thumbnail as OpenApi.IJsonSchema.IString;
  const homepage = properties.homepage as OpenApi.IJsonSchema.IString;
  const hobbies = properties.hobbies as OpenApi.IJsonSchema.IArray;

  TestEquality.equals("strict minimum", 0, age.minimum);
  TestEquality.equals("strict maximum", 100, age.maximum);
  TestEquality.equals("strict multipleOf", 5, age.multipleOf);
  TestEquality.equals("strict exclusiveMinimum", 0, score.exclusiveMinimum);
  TestEquality.equals("strict exclusiveMaximum", 100, score.exclusiveMaximum);
  TestEquality.equals("strict format", "uri", thumbnail.format);
  TestEquality.equals(
    "strict contentMediaType",
    "image/png",
    thumbnail.contentMediaType,
  );
  TestEquality.equals("strict pattern", "^https://", homepage.pattern);
  TestEquality.equals("strict minLength", 8, thumbnail.minLength);
  TestEquality.equals("strict maxLength", 255, thumbnail.maxLength);
  TestEquality.equals("strict minItems", 1, hobbies.minItems);
  TestEquality.equals("strict maxItems", 10, hobbies.maxItems);
  TestEquality.equals("strict uniqueItems", true, hobbies.uniqueItems);

  TestEquality.equals(
    "strict age description",
    "How old the member is.",
    age.description,
  );
  TestEquality.equals(
    "strict score description",
    "How much the member scored.",
    score.description,
  );
  TestEquality.equals(
    "strict thumbnail description",
    "Where to reach the member.",
    thumbnail.description,
  );
  TestEquality.equals(
    "strict homepage description",
    "The member's homepage.",
    homepage.description,
  );
  TestEquality.equals(
    "strict hobbies description",
    "What the member likes.",
    hobbies.description,
  );
};
