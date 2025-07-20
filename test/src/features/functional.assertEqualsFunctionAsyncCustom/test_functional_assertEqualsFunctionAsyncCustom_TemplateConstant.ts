import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsFunctionAsyncCustom_TemplateConstant =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TemplateConstant",
    )(TemplateConstant)(
      (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
