import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_equalsReturn_TemplateConstant = (): void => _test_functional_equalsReturn(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => TemplateConstant) => typia.functional.equalsReturn(p),
)