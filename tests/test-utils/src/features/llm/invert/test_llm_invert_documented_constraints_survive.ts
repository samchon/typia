import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
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
 * thirteen keywords across the numeric, string, and array inverters. `format`
 * and `pattern` are mutually exclusive tags, so they live on separate string
 * leaves (`thumbnail` and `homepage`).
 *
 * Each keyword is asserted on its own rather than as one object, so a failure
 * names the keyword that was erased. (The one-way `TestValidator.equals` once
 * made a wholly erased leaf pass as an object; the suites now compare
 * symmetrically, #2401.)
 *
 * 1. Declare two identical interfaces whose only difference is property JSDoc.
 * 2. Convert both to non-strict LLM parameters and invert them back to OpenAPI.
 * 3. Assert each of the thirteen constraint keywords survives on the documented
 *    leaves.
 * 4. Assert the documented and undocumented inversions agree in both directions
 *    apart from `description`.
 *
 * @evidence contracts/testing.md#behavioral-verification invert runs on non-strict schemas whose properties carry documentation and each of thirteen constraint keywords is asserted on its own with a message naming it, so erasing any keyword fails by name.
 * @evidence contracts/testing.md#independent-expectations The expected keywords are the tags declared on the TypeScript type; the schemas come from the native producer and the keywords are compared with the declared values.
 * @evidence contracts/testing.md#distinguishing-cases Numeric, string and array inverters, documented versus undocumented properties and the format and pattern separation each flip a keyword; the strict counterpart is a separate case.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. typia.llm.schema is produced by the native transform, while the inversion runs in process.
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
  interface IUndocumented {
    age: number & tags.Minimum<0> & tags.Maximum<100> & tags.MultipleOf<5>;
    score: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<100>;
    thumbnail: string &
      tags.Format<"uri"> &
      tags.ContentMediaType<"image/png"> &
      tags.MinLength<8> &
      tags.MaxLength<255>;
    homepage: string & tags.Pattern<"^https://">;
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
  const homepage = properties.homepage as OpenApi.IJsonSchema.IString;
  const hobbies = properties.hobbies as OpenApi.IJsonSchema.IArray;

  TestEquality.equals("documented minimum", 0, age.minimum);
  TestEquality.equals("documented maximum", 100, age.maximum);
  TestEquality.equals("documented multipleOf", 5, age.multipleOf);
  TestEquality.equals("documented exclusiveMinimum", 0, score.exclusiveMinimum);
  TestEquality.equals(
    "documented exclusiveMaximum",
    100,
    score.exclusiveMaximum,
  );
  TestEquality.equals("documented format", "uri", thumbnail.format);
  TestEquality.equals(
    "documented contentMediaType",
    "image/png",
    thumbnail.contentMediaType,
  );
  TestEquality.equals("documented pattern", "^https://", homepage.pattern);
  TestEquality.equals("documented minLength", 8, thumbnail.minLength);
  TestEquality.equals("documented maxLength", 255, thumbnail.maxLength);
  TestEquality.equals("documented minItems", 1, hobbies.minItems);
  TestEquality.equals("documented maxItems", 10, hobbies.maxItems);
  TestEquality.equals("documented uniqueItems", true, hobbies.uniqueItems);

  TestEquality.equals(
    "undocumented shape reaches documented",
    undocumented,
    documented,
    (key) => key === "description",
  );
  TestEquality.equals(
    "documented shape reaches undocumented",
    documented,
    undocumented,
    (key) => key === "description",
  );
};
