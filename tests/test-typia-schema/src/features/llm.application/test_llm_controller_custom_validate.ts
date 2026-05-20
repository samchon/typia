import { TestValidator } from "@nestia/e2e";
import typia, { ILlmController, IValidation } from "typia";

/**
 * Verifies that a custom `validate` function passed to `typia.llm.controller`
 * is threaded through to the application's function descriptor.
 *
 * The `validate` option on `ILlmController` allows per-function runtime
 * validators to be injected at controller construction time. This test guards
 * the forwarding path through `controller.application.functions[0].validate`; a
 * regression would silently drop the custom hook, causing validation to be
 * skipped in downstream orchestration code.
 *
 * 1. Define an `IApplication` interface with a single `hello()` method.
 * 2. Create a custom `validate` function and construct a controller with it.
 * 3. Assert that `controller.application.functions[0].validate` is reference-equal
 *    to the supplied function.
 */
export const test_llm_controller_custom_validate = (): void => {
  interface IApplication {
    hello(): void;
  }
  const validate = (input: unknown): IValidation<unknown> => {
    return {
      success: true,
      data: input,
    };
  };
  const controller: ILlmController = typia.llm.controller<IApplication>(
    "app",
    {
      hello: () => {},
    },
    {
      validate: {
        hello: validate,
      },
    },
  );
  TestValidator.equals(
    "custom",
    controller.application.functions[0]?.validate,
    validate,
  );
};
