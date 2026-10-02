import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies the animal union publishes both object components and its type
 * discriminator.
 *
 * Shared literal property detection must assemble the discriminator and
 * component graph from actual declarations.
 *
 * 1. Invoke the schema producer on the type declarations in this file.
 * 2. Assert both components, two alternatives and discriminator name checks
 *    remain; spec_union and oneof_declaration_syntax own exact mappings and
 *    negative eligibility twins.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that the animal union publishes both object components and its type discriminator.
 * @evidence contracts/testing.md#independent-expectations The cat/dog interfaces provide a common literal type property and two object variants; this entry asserts presence/kind and not the full mapping values.
 * @evidence contracts/testing.md#distinguishing-cases Both components, two alternatives and discriminator name checks remain; spec_union and oneof_declaration_syntax own exact mappings and negative eligibility twins.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_oneof through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Shared literal property detection must assemble the discriminator and component graph from actual declarations. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Both components, two alternatives and discriminator name checks remain; spec_union and oneof_declaration_syntax own exact mappings and negative eligibility twins. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
 */
export const test_json_schema_oneof = (): void => {
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

  const unit = typia.json.schema<Animal>();
  const schema = unit.schema;

  // named union type returns $ref
  let actualSchema: OpenApi.IJsonSchema;
  if (OpenApiTypeChecker.isReference(schema)) {
    const animalSchema = unit.components.schemas?.["Animal"];
    TestValidator.predicate(
      "Animal exists in components",
      () => animalSchema !== undefined,
    );
    actualSchema = animalSchema!;
  } else {
    actualSchema = schema;
  }

  TestValidator.predicate("is oneOf type", () =>
    OpenApiTypeChecker.isOneOf(actualSchema),
  );

  if (OpenApiTypeChecker.isOneOf(actualSchema)) {
    const oneOf = actualSchema as OpenApi.IJsonSchema.IOneOf;

    TestEquality.equals("oneOf has 2 types", oneOf.oneOf.length, 2);

    // check discriminator
    TestValidator.predicate(
      "has discriminator",
      () => oneOf.discriminator !== undefined,
    );
    if (oneOf.discriminator) {
      TestEquality.equals(
        "discriminator property is type",
        oneOf.discriminator.propertyName,
        "type",
      );
    }

    // each element should be reference or object
    TestValidator.predicate("all elements are ref or object", () =>
      oneOf.oneOf.every(
        (s) =>
          OpenApiTypeChecker.isReference(s) || OpenApiTypeChecker.isObject(s),
      ),
    );
  }

  // check ICat and IDog in components
  TestValidator.predicate(
    "ICat exists in components",
    () =>
      unit.components.schemas !== undefined &&
      "ICat" in unit.components.schemas,
  );
  TestValidator.predicate(
    "IDog exists in components",
    () =>
      unit.components.schemas !== undefined &&
      "IDog" in unit.components.schemas,
  );
};
