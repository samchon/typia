import { TestValidator } from "@nestia/e2e";
import typia, { ILlmApplication, IValidation } from "typia";

/**
 * Verifies that a custom `validate` function passed to `typia.llm.application`
 * is threaded through to the emitted function descriptor.
 *
 * The `validate` option on `ILlmApplication` lets callers inject a per-function
 * runtime validator. This test guards the forwarding path: if the transform
 * drops the option or does not attach it to `functions[0].validate`, callers
 * lose their custom validation hook silently.
 *
 * 1. Define an `IApplication` interface with a single `hello()` method.
 * 2. Create a custom `validate` function and pass it via the `validate` map.
 * 3. Assert that `app.functions[0].validate` is reference-equal to the supplied
 *    function.
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
  TestValidator.equals("custom", app.functions[0]?.validate, validate);
};
