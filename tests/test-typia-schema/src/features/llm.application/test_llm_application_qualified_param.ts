import { TestValidator } from "@nestia/e2e";
import { ILlmApplication } from "@typia/interface";
import typia from "typia";

/**
 * Verifies typia.llm.application accepts dotted JSDoc parameter names.
 *
 * TypeScript-Go parses `@param input.value` as a qualified name. The native
 * metadata reader must preserve that text without calling `Node.Text()` on the
 * qualified-name node, otherwise controller documentation from Nestia-style
 * inputs can abort the transform before an application schema is emitted.
 *
 * 1. Declare a controller method with `@param input.value` documentation.
 * 2. Generate the LLM application schema for that controller.
 * 3. Assert the function exists and its single object parameter was inlined, so
 *    the parameter schema's `properties` carry the object's own keys (`value`),
 *    exactly as published typia emits.
 */
export const test_llm_application_qualified_param = (): void => {
  interface IRequest {
    value: string;
  }
  interface IController {
    /**
     * Accept a nested request value.
     *
     * @param input.value Nested value documentation
     */
    accept(input: IRequest): void;
  }

  const app: ILlmApplication = typia.llm.application<IController>();
  const func = app.functions.find((f) => f.name === "accept");

  TestValidator.predicate("function exists", () => func !== undefined);
  TestValidator.predicate(
    "parameter schema exists",
    () => func?.parameters.properties.value !== undefined,
  );
};
