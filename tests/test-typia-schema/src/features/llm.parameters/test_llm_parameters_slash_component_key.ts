import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies a root type whose component key holds a slash still dereferences.
 *
 * A generic argument such as `"A/B"` puts a slash into the component key
 * `IVariantA/B`. The native parameters programmer took the key after the last
 * slash of the `$ref`, found no `B` component, and panicked the compiler with
 * "Unreachable code" for `llm.parameters` and `llm.structuredOutput`, while
 * `llm.application` left the parameters an undereferenced `$ref`.
 *
 * 1. Generate parameters, structured output, and application parameters for
 *    `IVariant<"A/B">`.
 * 2. Assert each is the dereferenced object carrying the key in its description.
 */
export const test_llm_parameters_slash_component_key = (): void => {
  const expected: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      kind: { type: "string", enum: ["A/B"] },
      value: { type: "number" },
    },
    required: ["kind", "value"],
    additionalProperties: false,
    description: "Current Type: {@link IVariantA/B}",
    $defs: {},
  };
  TestEquality.equals(
    "parameters",
    expected,
    typia.llm.parameters<IVariant<"A/B">>(),
  );
  TestEquality.equals(
    "structuredOutput",
    expected,
    typia.llm.structuredOutput<IVariant<"A/B">>().parameters,
  );
  TestEquality.equals(
    "application",
    expected,
    typia.llm.application<IController>().functions[0]?.parameters,
  );
};

interface IVariant<T extends string> {
  kind: T;
  value: number;
}
interface IController {
  run(input: IVariant<"A/B">): void;
}
