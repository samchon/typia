import { ILlmApplication } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies ILlmApplication.description stays undefined when the source type has
 * no JSDoc.
 *
 * The description is optional: it must appear only when the author actually
 * documented the class or interface. Emitting an empty string (or any
 * placeholder) would pollute agent prompts with meaningless instructions, so
 * the generator must omit the property entirely when there is nothing to
 * describe.
 *
 * 1. Declare an interface with a method but no leading JSDoc comment.
 * 2. Call typia.llm.application<Interface>().
 * 3. Assert application.description is undefined while functions still exist.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (description omitted without JSDoc; functions still generated). The case documents its purpose as: Verifies ILlmApplication.description stays undefined when the source type has no JSDoc.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The description is optional: it must appear only when the author actually documented the class or interface. Emitting an empty string (or any placeholder) would pollute agent prompts with meaningless instructions, so the generator must omit the property entirely when there is nothing to describe. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (description omitted without JSDoc; functions still generated) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_description_absent is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_application_description_absent = (): void => {
  interface ICalculator {
    add(input: { a: number; b: number }): void;
  }

  const app: ILlmApplication = typia.llm.application<ICalculator>();

  TestEquality.equals(
    "description omitted without JSDoc",
    app.description,
    undefined,
  );
  TestEquality.equals("functions still generated", app.functions.length, 1);
};
