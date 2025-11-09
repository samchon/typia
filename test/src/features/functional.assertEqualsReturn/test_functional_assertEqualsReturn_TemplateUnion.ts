import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TemplateUnion = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => TemplateUnion) => typia.functional.assertEqualsReturn(p),
)