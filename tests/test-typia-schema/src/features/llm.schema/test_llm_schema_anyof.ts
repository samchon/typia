import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies typia.llm.schema emits `anyOf` for a discriminated union.
 *
 * Locks the union branch of the LLM schema converter. Object-shaped types route
 * through `LlmTypeChecker.isObject`, but a named union has to be lifted into
 * `$defs` and referenced via `$ref`, with `anyOf` describing the variants. A
 * regression in branch selection would silently inline one variant and drop the
 * other from the function-calling schema.
 *
 * 1. Declare two interfaces with a shared `type` discriminator and union them.
 * 2. Call `typia.llm.schema<Animal>($defs)`.
 * 3. Assert the call returns a `$ref`, and that `$defs["Animal"]` is `anyOf`.
 */
export const test_llm_schema_anyof = (): void => {
  // discriminated union with type property
  interface ICat {
    type: "cat";
    name: string;
    meow: boolean;
  }
  interface IDog {
    type: "dog";
    name: string;
    bark: boolean;
  }
  type Animal = ICat | IDog;

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<Animal>($defs);

  // named union type returns $ref
  TestValidator.predicate("is reference", () =>
    LlmTypeChecker.isReference(schema),
  );

  const animalSchema = $defs["Animal"];
  TestValidator.predicate(
    "Animal exists in $defs",
    () => animalSchema !== undefined,
  );

  if (animalSchema) {
    // LLM schema uses anyOf for unions
    TestValidator.predicate("is anyOf type", () =>
      LlmTypeChecker.isAnyOf(animalSchema),
    );

    if (LlmTypeChecker.isAnyOf(animalSchema)) {
      TestValidator.equals("anyOf has 2 types", animalSchema.anyOf.length, 2);

      // each element should be reference or object
      TestValidator.predicate("all elements are ref or object", () =>
        animalSchema.anyOf.every(
          (s) => LlmTypeChecker.isReference(s) || LlmTypeChecker.isObject(s),
        ),
      );
    }
  }

  // check ICat and IDog in $defs
  TestValidator.predicate("ICat exists in $defs", () => "ICat" in $defs);
  TestValidator.predicate("IDog exists in $defs", () => "IDog" in $defs);

  // verify ICat structure
  const catSchema = $defs["ICat"];
  if (catSchema && LlmTypeChecker.isObject(catSchema)) {
    TestValidator.predicate(
      "ICat has type property",
      () => "type" in catSchema.properties,
    );
    TestValidator.predicate(
      "ICat has name property",
      () => "name" in catSchema.properties,
    );
    TestValidator.predicate(
      "ICat has meow property",
      () => "meow" in catSchema.properties,
    );
  }
};
