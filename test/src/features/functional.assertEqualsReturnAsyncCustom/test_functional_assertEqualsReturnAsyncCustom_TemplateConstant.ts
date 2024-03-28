import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsReturnAsyncCustom_TemplateConstant =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "TemplateConstant",
  )(TemplateConstant)(
    (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
