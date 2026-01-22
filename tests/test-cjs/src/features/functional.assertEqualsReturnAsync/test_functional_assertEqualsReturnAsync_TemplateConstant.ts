import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsReturnAsync_TemplateConstant =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "TemplateConstant",
    )(TemplateConstant)(
      (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
        typia.functional.assertEqualsReturn(p),
    );
