import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertReturnAsyncCustom_TemplateConstant =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TemplateConstant")(
      TemplateConstant,
    )((p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
