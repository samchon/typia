import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_isParameters_TemplateUnion = _test_functional_isParameters(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => TemplateUnion) => typia.functional.isParameters(p),
)