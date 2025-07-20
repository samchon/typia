import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertParametersAsyncCustom_TemplateConstant =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "TemplateConstant",
    )(TemplateConstant)(
      (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
