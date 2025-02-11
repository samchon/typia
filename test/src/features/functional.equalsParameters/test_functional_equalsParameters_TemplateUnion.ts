import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_equalsParameters_TemplateUnion = _test_functional_equalsParameters(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => TemplateUnion) => typia.functional.equalsParameters(p),
)