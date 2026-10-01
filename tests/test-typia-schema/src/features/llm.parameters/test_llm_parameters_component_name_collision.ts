import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { Foo as Alpha } from "../json.schema/ComponentNameCollisionAlpha";
import { Foo as Beta } from "../json.schema/ComponentNameCollisionBeta";
import { Foo as Gamma } from "../json.schema/ComponentNameCollisionGamma";

interface IArguments {
  a: Alpha;
  b: Beta;
  c: Gamma.o1;
}

/**
 * Verifies a minted `$defs` key never squats a real type's own name.
 *
 * The LLM generator builds its own metadata collection and normalizes names
 * through a different replacer than the OpenAPI generator, so it is a genuinely
 * independent surface for the same root cause rather than a second view of one
 * document. The allocator used to mint `<Base>.o<N>` without checking that id
 * against the ids already handed out, which collapsed the real `namespace Foo {
 * interface o1 }` member and a second `Foo` onto one `$defs` key. The model was
 * then handed one type's shape under two parameters, and typia's own runtime
 * validator rejected what the model produced for the other.
 *
 * 1. Generate LLM parameters referencing three colliding types.
 * 2. Assert each parameter carries a distinct local reference.
 * 3. Assert every referenced definition exists and owns its own property.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (each colliding type owns a distinct local reference; three distinct types allocate three definitions; … resolves to the definition owning its own … property). The case documents its purpose as: Verifies a minted `$defs` key never squats a real type's own name.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The LLM generator builds its own metadata collection and normalizes names through a different replacer than the OpenAPI generator, so it is a genuinely independent surface for the same root cause rather than a second view of one document. The allocator used to mint `<Base>.o<N>` without checking that id against the ids already handed out, which collapsed the real `namespace Foo { interface o1 }` member and a second `Foo` onto one `$defs` key. The model was then handed one type's shape under two parameters, and typia's own runtime validator rejected what the model produced for the other. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (each colliding type owns a distinct local reference; three distinct types allocate three definitions; … resolves to the definition owning its own … property) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_component_name_collision is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_parameters_component_name_collision = (): void => {
  const parameters: ILlmSchema.IParameters = typia.llm.parameters<IArguments>();

  // 1. EVERY PARAMETER OWNS A DISTINCT REFERENCE
  const $ref = (key: string): string =>
    (parameters.properties?.[key] as ILlmSchema.IReference | undefined)?.$ref ??
    "";
  const refs: string[] = ["a", "b", "c"].map($ref);
  TestEquality.equals(
    "each colliding type owns a distinct local reference",
    3,
    new Set(refs).size,
  );

  // 2. THREE DISTINCT TYPES KEEP THREE DEFINITIONS
  TestEquality.equals(
    "three distinct types allocate three definitions",
    3,
    Object.keys(parameters.$defs ?? {}).length,
  );

  // 3. EVERY REFERENCE RESOLVES TO ITS OWN DEFINITION
  const expected: Array<[string, string]> = [
    ["a", "a"],
    ["b", "b"],
    ["c", "c"],
  ];
  for (const [accessor, property] of expected) {
    const definition = (parameters.$defs ?? {})[
      decodeURIComponent($ref(accessor).split("/").at(-1)!)
        .split("~1")
        .join("/")
        .split("~0")
        .join("~")
    ] as ILlmSchema.IObject | undefined;
    TestValidator.predicate(
      `${accessor} resolves to the definition owning its own ${property} property`,
      () =>
        definition !== undefined &&
        Object.prototype.hasOwnProperty.call(
          definition.properties ?? {},
          property,
        ),
    );
  }
};
