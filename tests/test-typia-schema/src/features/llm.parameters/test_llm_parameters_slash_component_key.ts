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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.parameters, typia.llm.structuredOutput, typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (parameters; structuredOutput; application). The case documents its purpose as: Verifies a root type whose component key holds a slash still dereferences.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: A generic argument such as `"A/B"` puts a slash into the component key `IVariantA/B`. The native parameters programmer took the key after the last slash of the `$ref`, found no `B` component, and panicked the compiler with "Unreachable code" for `llm.parameters` and `llm.structuredOutput`, while `llm.application` left the parameters an undereferenced `$ref`. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (parameters; structuredOutput; application) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_parameters_slash_component_key is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
