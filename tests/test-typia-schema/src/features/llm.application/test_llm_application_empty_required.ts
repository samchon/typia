import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies LLM applications keep empty parameter shell fields in every mode.
 *
 * The application composer synthesizes an empty parameter schema for functions
 * without arguments. That shell must stay explicit for AI function calling even
 * after the OpenAPI schema generator omits empty `required` arrays.
 *
 * 1. Generate default and strict applications with a no-argument function.
 * 2. Locate the single generated function in each application.
 * 3. Assert both parameter object shells keep explicit empty fields.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (default function exists; strict function exists). The case documents its purpose as: Verifies LLM applications keep empty parameter shell fields in every mode.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The application composer synthesizes an empty parameter schema for functions without arguments. That shell must stay explicit for AI function calling even after the OpenAPI schema generator omits empty `required` arrays. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (default function exists; strict function exists) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_empty_required is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_application_empty_required = (): void => {
  interface IController {
    ping(): void;
  }
  type IStrict = { strict: true };

  const defaultApp = typia.llm.application<IController>();
  const defaultFunc = defaultApp.functions.find((f) => f.name === "ping");

  TestValidator.predicate(
    "default function exists",
    () => defaultFunc !== undefined,
  );
  if (defaultFunc !== undefined)
    assertShell("default empty application parameters", defaultFunc.parameters);

  const app = typia.llm.application<IController, IStrict>();
  const func = app.functions.find((f) => f.name === "ping");

  TestValidator.predicate("strict function exists", () => func !== undefined);
  if (func !== undefined)
    assertShell("strict empty application parameters", func.parameters);
};

const assertShell = (
  name: string,
  schema: ILlmSchema.IParameters | ILlmSchema | undefined,
): void => {
  TestEquality.equals(
    name,
    {
      type: (schema as ILlmSchema.IObject | undefined)?.type,
      properties: (schema as ILlmSchema.IObject | undefined)?.properties,
      required: (schema as ILlmSchema.IObject | undefined)?.required,
      additionalProperties: (schema as ILlmSchema.IObject | undefined)
        ?.additionalProperties,
    },
    {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false,
    },
  );
};
