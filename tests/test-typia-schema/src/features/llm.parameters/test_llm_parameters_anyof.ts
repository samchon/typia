import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmJson, LlmTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies native parameter schemas connect to discriminated utility coercion.
 *
 * Hand-authored schemas in utility units cannot reveal a broken reference or
 * discriminator emitted by the transformer. This case reuses its one generated
 * schema for both variants and an unmatched discriminator, without rebuilding
 * the native producer for the portable coercion matrix.
 *
 * 1. Generate parameters for the two declared animal variants and inspect the
 *    independently required object, definitions and union shape.
 * 2. Pass both encoded boolean variants through the public utility and compare
 *    complete literal data; an unknown discriminator retains its inner text.
 *
 * @evidence contracts/testing.md#behavioral-verification Native typia.llm.parameters generation must produce the declared two-variant schema, and public LlmJson.coerce must consume it to convert cat true and dog false while preserving names/discriminators. Complete literal output comparisons and an unmatched discriminator detect wrong branch wiring rather than only schema acceptance.
 * @evidence contracts/testing.md#independent-expectations The authored ICat/IDog interfaces define object fields, literal discriminators and boolean kinds; independent literal input/output pairs establish the runtime result. Expectations are not captured from generated schema or a typia validator.
 * @evidence contracts/testing.md#distinguishing-cases First and second object alternatives exercise distinct boolean values; an adjacent unknown discriminator retains text instead of choosing an arbitrary variant. Existing definition/union/property assertions remain, and explicit object-kind predicates prevent conditional bodies from hiding a wrong definition kind. Portable coercion spellings, nesting and array ambiguity remain in direct utility units.
 * @evidence contracts/testing.md#execution-ownership test-typia-schema start discovers this matching export through DynamicExecutor and ttsx's real typia native producer. It is a boundary case because compiler-emitted references/discriminators become utility input; the portable matrix executes in test-utils test:unit.
 * @evidence contracts/e2e.md#necessary-boundary The actual native transformer emits typia.llm.parameters into runtime data consumed by public LlmJson.coerce. Authored utility schemas cannot detect malformed generated references, discriminator mappings or kind wiring; both variants and a negative twin verify that supported connection once.
 * @evidence contracts/e2e.md#shared-execution This existing suite case generates one schema and shares it across three conversion inputs. The suite uses its shared ttsx/native plugin session and workspace artifact cache; no installation, compiler host, native build or parameter generation is repeated for the transferred portable cases.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation supplies local literal inputs and the same unchanged schema; no earlier output becomes a later expectation. The suite runner owns the host/cache lifetime, and this case retains no process, handle or temporary directory. It tests warm assembly, not cold artifact invalidation.
 * @evidence contracts/e2e.md#preserved-coverage Every original definition, union and property assertion remains in this existing case, with missing shape guarded explicitly and complete runtime outputs added. Thirty-seven former utility coercion scenarios preserve their non-producer bodies in test-utils unit; this batch owns only the generated-schema connection they cannot prove.
 */
export const test_llm_parameters_anyof = (): void => {
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

  interface IInput {
    pet: Animal;
  }

  const params: ILlmSchema.IParameters = typia.llm.parameters<IInput>();

  TestValidator.predicate("is object", () => LlmTypeChecker.isObject(params));
  TestEquality.equals(
    "additionalProperties",
    params.additionalProperties,
    false,
  );

  // check pet - discriminated union
  const pet = params.properties["pet"];
  TestValidator.predicate("pet exists", () => pet !== undefined);

  // pet could be reference to Animal or inline anyOf
  if (LlmTypeChecker.isReference(pet!)) {
    TestValidator.predicate("Animal in $defs", () => "Animal" in params.$defs);
    const animalDef = params.$defs["Animal"];
    if (animalDef) {
      TestValidator.predicate("Animal is anyOf", () =>
        LlmTypeChecker.isAnyOf(animalDef),
      );
      if (LlmTypeChecker.isAnyOf(animalDef)) {
        TestEquality.equals("Animal has 2 types", animalDef.anyOf.length, 2);
      }
    }
  } else if (LlmTypeChecker.isAnyOf(pet!)) {
    TestEquality.equals("pet has 2 types", pet.anyOf.length, 2);
  }

  TestValidator.predicate(
    "pet has a supported union representation",
    () =>
      pet !== undefined &&
      (LlmTypeChecker.isReference(pet) || LlmTypeChecker.isAnyOf(pet)),
  );

  // ICat and IDog should be in $defs
  TestValidator.predicate("ICat in $defs", () => "ICat" in params.$defs);
  TestValidator.predicate("IDog in $defs", () => "IDog" in params.$defs);

  // verify ICat structure
  const catDef = params.$defs["ICat"];
  TestValidator.predicate(
    "ICat definition is object",
    () => catDef !== undefined && LlmTypeChecker.isObject(catDef),
  );
  if (catDef && LlmTypeChecker.isObject(catDef)) {
    TestValidator.predicate("ICat has type", () => "type" in catDef.properties);
    TestValidator.predicate("ICat has name", () => "name" in catDef.properties);
    TestValidator.predicate("ICat has meow", () => "meow" in catDef.properties);
  }

  // verify IDog structure
  const dogDef = params.$defs["IDog"];
  TestValidator.predicate(
    "IDog definition is object",
    () => dogDef !== undefined && LlmTypeChecker.isObject(dogDef),
  );
  if (dogDef && LlmTypeChecker.isObject(dogDef)) {
    TestValidator.predicate("IDog has type", () => "type" in dogDef.properties);
    TestValidator.predicate("IDog has name", () => "name" in dogDef.properties);
    TestValidator.predicate("IDog has bark", () => "bark" in dogDef.properties);
  }

  TestEquality.equals(
    "generated cat schema connects to coercion",
    LlmJson.coerce(
      { pet: { type: "cat", name: "Mina", meow: "true" } },
      params,
    ),
    { pet: { type: "cat", name: "Mina", meow: true } },
  );
  TestEquality.equals(
    "generated dog schema connects to coercion",
    LlmJson.coerce(
      { pet: { type: "dog", name: "Duke", bark: "false" } },
      params,
    ),
    { pet: { type: "dog", name: "Duke", bark: false } },
  );
  const unmatched = { pet: { type: "bird", name: "Pip", meow: "true" } };
  TestEquality.equals(
    "unknown generated discriminator retains text",
    LlmJson.coerce(unmatched, params),
    { pet: { type: "bird", name: "Pip", meow: "true" } },
  );
};
