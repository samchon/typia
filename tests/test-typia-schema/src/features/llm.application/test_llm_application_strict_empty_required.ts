import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

/**
 * Verifies strict LLM applications keep empty object `required` arrays.
 *
 * The application composer synthesizes an empty parameter schema for functions
 * without arguments. That shell must stay explicit for strict function calling
 * even after the OpenAPI schema generator omits empty `required` arrays.
 *
 * 1. Generate a strict application with a no-argument function.
 * 2. Locate the single generated function.
 * 3. Assert the parameter object shell keeps `required: []`.
 */
export const test_llm_application_strict_empty_required = (): void => {
  interface IController {
    ping(): void;
  }
  type IStrict = { strict: true };

  const app = typia.llm.application<IController, IStrict>();
  const func = app.functions.find((f) => f.name === "ping");

  TestValidator.predicate("function exists", () => func !== undefined);
  if (func === undefined) return;

  assertShell("strict empty application parameters", func.parameters);
};

const assertShell = (
  name: string,
  schema: ILlmSchema.IParameters | ILlmSchema | undefined,
): void => {
  TestValidator.equals(
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
