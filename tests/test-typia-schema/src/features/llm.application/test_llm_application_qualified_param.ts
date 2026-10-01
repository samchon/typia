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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (function exists; parameter schema exists). The case documents its purpose as: Verifies typia.llm.application accepts dotted JSDoc parameter names.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: TypeScript-Go parses `@param input.value` as a qualified name. The native metadata reader must preserve that text without calling `Node.Text()` on the qualified-name node, otherwise controller documentation from Nestia-style inputs can abort the transform before an application schema is emitted. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (function exists; parameter schema exists) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_qualified_param is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
