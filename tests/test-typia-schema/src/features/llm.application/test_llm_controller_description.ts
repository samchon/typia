import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import typia from "typia";

/**
 * Verifies typia.llm.controller propagates the class JSDoc as
 * controller.application.description.
 *
 * A controller wraps an ILlmApplication, so the application-level description
 * must survive the extra layer and be readable from a class source (not only an
 * interface). This is the shape MCP-style integrations consume, where the
 * whole-toolset description doubles as the server instruction; a regression
 * that only wired interfaces would silently drop the description for
 * class-based controllers.
 *
 * 1. Declare a class with a JSDoc summary/body and one method.
 * 2. Call typia.llm.controller<Class>(name, instance).
 * 3. Assert controller.application.description carries the summary and body.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (controller application description carries the summary; controller application description carries the body). The case documents its purpose as: Verifies typia.llm.controller propagates the class JSDoc as controller.application.description.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: A controller wraps an ILlmApplication, so the application-level description must survive the extra layer and be readable from a class source (not only an interface). This is the shape MCP-style integrations consume, where the whole-toolset description doubles as the server instruction; a regression that only wired interfaces would silently drop the description for class-based controllers. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (controller application description carries the summary; controller application description carries the body) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_controller_description is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_controller_description = (): void => {
  /**
   * Calculator controller.
   *
   * Exposes arithmetic tools that an LLM agent can invoke.
   */
  class Calculator {
    public add(input: { a: number; b: number }): void {
      input.a + input.b;
    }
  }

  const controller: ILlmController = typia.llm.controller<Calculator>(
    "calculator",
    new Calculator(),
  );

  TestValidator.predicate(
    "controller application description carries the summary",
    () =>
      controller.application.description !== undefined &&
      controller.application.description.includes("Calculator controller"),
  );
  TestValidator.predicate(
    "controller application description carries the body",
    () =>
      controller.application.description !== undefined &&
      controller.application.description.includes(
        "Exposes arithmetic tools that an LLM agent can invoke.",
      ),
  );
};
