import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsParametersAsyncCustom_TemplateConstant =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "TemplateConstant",
    )(TemplateConstant)(
      (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
