import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_TemplateAtomic = (): void => _test_functional_assertFunction(TypeGuardError)(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => TemplateAtomic) => typia.functional.assertFunction(p),
)