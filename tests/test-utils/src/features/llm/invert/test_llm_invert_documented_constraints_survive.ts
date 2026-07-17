import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { ILlmSchema, tags } from "typia";

/**
 * Verifies a JSDoc comment does not erase a non-strict leaf's constraints.
 *
 * `invert` restores constraints that `OpenApiConstraintShifter` moved into the
 * description, but the shift only happens under `strict`. Reading the tags back
 * unconditionally made `LlmDescriptionInverter` return an all-`undefined`
 * object for every non-strict leaf, and spreading it over the schema erased the
 * real keywords. Only a leaf carrying a `description` reached that spread, so
 * documenting a property silently disabled its validation. This pins all
 * thirteen keywords across the numeric, string, and array inverters.
 *
 * Each keyword is asserted on its own rather than as one object, because
 * `TestValidator.equals` walks the keys of its first argument and skips the
 * ones holding `undefined`: a wholly erased leaf compared as an object matches
 * anything and passes vacuously.
 *
 * 1. Declare two identical interfaces whose only difference is property JSDoc.
 * 2. Convert both to non-strict LLM parameters and invert them back to OpenAPI.
 * 3. Assert each of the thirteen constraint keywords survives on the documented
 *    leaves.
 * 4. Assert the documented and undocumented inversions agree in both directions
 *    apart from `description`.
 */
export const test_llm_invert_documented_constraints_survive = (): void => {
  interface IDocumented {
    /** How old the member is. */
    age: number & tags.Minimum<0> & tags.Maximum<100> & tags.MultipleOf<5>;
    /** How much the member scored. */
    score: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>;
    /** Where to reach the member. */
    thumbnail: string &
      tags.Format<"uri"> &
      tags.ContentMediaType<"image/png"> &
      tags.Pattern<"^https://"> &
      tags.MinLength<8> &
      tags.MaxLength<255>;
    /** What the member likes. */
    hobbies: Array<string> &
      tags.MinItems<1> &
      tags.MaxItems<10> &
      tags.UniqueItems;
  }
  interface IUndocumented {
    age: number & tags.Minimum<0> & tags.Maximum<100> & tags.MultipleOf<5>;
    score: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>;
    thumbnail: string &
      tags.Format<"uri"> &
      tags.ContentMediaType<"image/png"> &
      tags.Pattern<"^https://"> &
      tags.MinLength<8> &
      tags.MaxLength<255>;
    hobbies: Array<string> &
      tags.MinItems<1> &
      tags.MaxItems<10> &
      tags.UniqueItems;
  }

  const invert = (parameters: ILlmSchema.IParameters): OpenApi.IJsonSchema =>
    LlmSchemaConverter.invert({
      components: {},
      schema: parameters,
      $defs: parameters.$defs,
    });
  const documented = invert(
    typia.llm.parameters<IDocumented>(),
  ) as OpenApi.IJsonSchema.IObject;
  const undocumented = invert(
    typia.llm.parameters<IUndocumented>(),
  ) as OpenApi.IJsonSchema.IObject;

  const properties = documented.properties!;
  const age = properties.age as OpenApi.IJsonSchema.INumber;
  const score = properties.score as OpenApi.IJsonSchema.INumber;
  const thumbnail = properties.thumbnail as OpenApi.IJsonSchema.IString;
  const hobbies = properties.hobbies as OpenApi.IJsonSchema.IArray;

  TestValidator.equals("documented minimum", 0, age.minimum);
  TestValidator.equals("documented maximum", 100, age.maximum);
  TestValidator.equals("documented multipleOf", 5, age.multipleOf);
  TestValidator.equals(
    "documented exclusiveMinimum",
    0,
    score.exclusiveMinimum,
  );
  TestValidator.equals(
    "documented exclusiveMaximum",
    100,
    score.exclusiveMaximum,
  );
  TestValidator.equals("documented format", "uri", thumbnail.format);
  TestValidator.equals(
    "documented contentMediaType",
    "image/png",
    thumbnail.contentMediaType,
  );
  TestValidator.equals("documented pattern", "^https://", thumbnail.pattern);
  TestValidator.equals("documented minLength", 8, thumbnail.minLength);
  TestValidator.equals("documented maxLength", 255, thumbnail.maxLength);
  TestValidator.equals("documented minItems", 1, hobbies.minItems);
  TestValidator.equals("documented maxItems", 10, hobbies.maxItems);
  TestValidator.equals("documented uniqueItems", true, hobbies.uniqueItems);

  TestValidator.equals(
    "undocumented shape reaches documented",
    undocumented,
    documented,
    (key) => key !== "description",
  );
  TestValidator.equals(
    "documented shape reaches undocumented",
    documented,
    undocumented,
    (key) => key !== "description",
  );
};
