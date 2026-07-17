import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
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
 * against the ids already handed out, which collapsed the real
 * `namespace Foo { interface o1 }` member and a second `Foo` onto one `$defs`
 * key. The model was then handed one type's shape under two parameters, and
 * typia's own runtime validator rejected what the model produced for the other.
 *
 * 1. Generate LLM parameters referencing three colliding types.
 * 2. Assert each parameter carries a distinct local reference.
 * 3. Assert every referenced definition exists and owns its own property.
 */
export const test_llm_parameters_component_name_collision = (): void => {
  const parameters: ILlmSchema.IParameters = typia.llm.parameters<IArguments>();

  // 1. EVERY PARAMETER OWNS A DISTINCT REFERENCE
  const $ref = (key: string): string =>
    (parameters.properties?.[key] as ILlmSchema.IReference | undefined)?.$ref ??
    "";
  const refs: string[] = ["a", "b", "c"].map($ref);
  TestValidator.equals(
    "each colliding type owns a distinct local reference",
    3,
    new Set(refs).size,
  );

  // 2. THREE DISTINCT TYPES KEEP THREE DEFINITIONS
  TestValidator.equals(
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
