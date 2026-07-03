import { TestValidator } from "@nestia/e2e";
import { ILlmApplication } from "@typia/interface";
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
 */
export const test_llm_application_description_absent = (): void => {
  interface ICalculator {
    add(input: { a: number; b: number }): void;
  }

  const app: ILlmApplication = typia.llm.application<ICalculator>();

  TestValidator.equals(
    "description omitted without JSDoc",
    app.description,
    undefined,
  );
  TestValidator.equals("functions still generated", app.functions.length, 1);
};
