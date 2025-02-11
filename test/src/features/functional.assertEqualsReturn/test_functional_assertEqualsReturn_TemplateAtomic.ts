import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TemplateAtomic = _test_functional_assertEqualsReturn(TypeGuardError)(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => TemplateAtomic) => typia.functional.assertEqualsReturn(p),
)