import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_TemplateAtomic = _test_functional_assertParameters(TypeGuardError)(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => TemplateAtomic) => typia.functional.assertParameters(p),
)