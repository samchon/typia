import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateEqualsReturn_TemplateUnion = (): void => _test_functional_validateEqualsReturn(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => TemplateUnion) => typia.functional.validateEqualsReturn(p),
)