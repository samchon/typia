import { TestEquality } from "@typia/template/equality";
import typia, { ILlmApplication, IValidation } from "typia";

/**
 * Verifies llm application custom validate against the native
 * typia.llm.application output.
 *
 * The case builds its input in this file and asserts custom.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (custom).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (custom) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application_custom_validate is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_application_custom_validate = (): void => {
  interface IApplication {
    hello(): void;
  }
  const validate = (input: unknown): IValidation<unknown> => {
    return {
      success: true,
      data: input,
    };
  };
  const app: ILlmApplication = typia.llm.application<IApplication>({
    validate: {
      hello: validate,
    },
  });
  TestEquality.equals("custom", app.functions[0]?.validate, validate);
};
