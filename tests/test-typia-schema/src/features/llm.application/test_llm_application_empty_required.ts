import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
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
