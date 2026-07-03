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
