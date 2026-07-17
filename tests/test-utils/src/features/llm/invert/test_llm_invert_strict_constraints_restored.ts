import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
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
 * Each keyword is asserted on its own rather than as one object, because
 * `TestValidator.equals` walks the keys of its first argument and skips the
 * ones holding `undefined`: an unrestored leaf compared as an object matches
 * anything and passes vacuously.
 *
 * 1. Convert a fully tagged interface to strict LLM parameters.
 * 2. Invert it back with `config.strict` set, matching the conversion.
 * 3. Assert each of the thirteen numeric, string, and array keywords is restored.
 * 4. Assert each leaf's description keeps its prose and drops its tags.
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

  TestValidator.equals("strict minimum", 0, age.minimum);
  TestValidator.equals("strict maximum", 100, age.maximum);
  TestValidator.equals("strict multipleOf", 5, age.multipleOf);
  TestValidator.equals("strict exclusiveMinimum", 0, score.exclusiveMinimum);
  TestValidator.equals("strict exclusiveMaximum", 100, score.exclusiveMaximum);
  TestValidator.equals("strict format", "uri", thumbnail.format);
  TestValidator.equals(
    "strict contentMediaType",
    "image/png",
    thumbnail.contentMediaType,
  );
  TestValidator.equals("strict pattern", "^https://", homepage.pattern);
  TestValidator.equals("strict minLength", 8, thumbnail.minLength);
  TestValidator.equals("strict maxLength", 255, thumbnail.maxLength);
  TestValidator.equals("strict minItems", 1, hobbies.minItems);
  TestValidator.equals("strict maxItems", 10, hobbies.maxItems);
  TestValidator.equals("strict uniqueItems", true, hobbies.uniqueItems);

  TestValidator.equals(
    "strict age description",
    "How old the member is.",
    age.description,
  );
  TestValidator.equals(
    "strict score description",
    "How much the member scored.",
    score.description,
  );
  TestValidator.equals(
    "strict thumbnail description",
    "Where to reach the member.",
    thumbnail.description,
  );
  TestValidator.equals(
    "strict homepage description",
    "The member's homepage.",
    homepage.description,
  );
  TestValidator.equals(
    "strict hobbies description",
    "What the member likes.",
    hobbies.description,
  );
};
