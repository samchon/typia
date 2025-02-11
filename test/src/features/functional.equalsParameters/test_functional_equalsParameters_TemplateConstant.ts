import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_equalsParameters_TemplateConstant = _test_functional_equalsParameters(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => TemplateConstant) => typia.functional.equalsParameters(p),
)