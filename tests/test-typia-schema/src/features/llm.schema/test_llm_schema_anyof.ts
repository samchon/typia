import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies llm schema anyof against the native typia.llm.schema output.
 *
 * The case builds its input in this file and asserts is reference, Animal
 * exists in $defs, is anyOf type, anyOf has 2 types, all elements are ref or
 * object, ICat exists in $defs.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.schema is evaluated by the native host on the types declared in this case and the result is checked by 10 assertions (is reference; Animal exists in $defs; is anyOf type; anyOf has 2 types; all elements are ref or object; ICat exists in $defs).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (is reference; Animal exists in $defs; is anyOf type; anyOf has 2 types; all elements are ref or object; ICat exists in $defs) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_schema_anyof is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
      TestEquality.equals("anyOf has 2 types", animalSchema.anyOf.length, 2);

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
