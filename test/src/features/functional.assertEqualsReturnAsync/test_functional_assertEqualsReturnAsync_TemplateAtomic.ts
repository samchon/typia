import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_TemplateAtomic = _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.assertEqualsReturn(p),
)