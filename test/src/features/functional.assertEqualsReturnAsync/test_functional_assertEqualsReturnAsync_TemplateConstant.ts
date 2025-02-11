import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_TemplateConstant = _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.assertEqualsReturn(p),
)