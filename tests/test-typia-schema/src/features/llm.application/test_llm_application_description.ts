import { TestValidator } from "@nestia/e2e";
import { ILlmApplication } from "@typia/interface";
import typia from "typia";

/**
 * Verifies typia.llm.application reflects the source type's JSDoc as
 * ILlmApplication.description.
 *
 * The application-level description is distinct from each function's
 * description: it comes from the JSDoc comment on the class or interface passed
 * as the generic argument, not from any method. Consumers such as the MCP
 * integration surface it as a whole-toolset instruction, so a regression that
 * dropped it would leave agents without the collection-level guidance the
 * author wrote. The summary line and the body paragraph are concatenated the
 * same way function descriptions are.
 *
 * 1. Declare an interface with a JSDoc summary and body, plus one method.
 * 2. Call typia.llm.application<Interface>().
 * 3. Assert application.description carries both the summary and the body.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (application description carries the summary; application description carries the body). The case documents its purpose as: Verifies typia.llm.application reflects the source type's JSDoc as ILlmApplication.description.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The application-level description is distinct from each function's description: it comes from the JSDoc comment on the class or interface passed as the generic argument, not from any method. Consumers such as the MCP integration surface it as a whole-toolset instruction, so a regression that dropped it would leave agents without the collection-level guidance the author wrote. The summary line and the body paragraph are concatenated the same way function descriptions are. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (application description carries the summary; application description carries the body) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_description is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_application_description = (): void => {
  /**
   * Calculator application.
   *
   * Provides arithmetic operations that an LLM agent can invoke.
   */
  interface ICalculator {
    /**
     * Add two numbers.
     *
     * @param input Operands to sum
     */
    add(input: { a: number; b: number }): void;
  }

  const app: ILlmApplication = typia.llm.application<ICalculator>();

  TestValidator.predicate(
    "application description carries the summary",
    () =>
      app.description !== undefined &&
      app.description.includes("Calculator application"),
  );
  TestValidator.predicate(
    "application description carries the body",
    () =>
      app.description !== undefined &&
      app.description.includes(
        "Provides arithmetic operations that an LLM agent can invoke.",
      ),
  );
};
