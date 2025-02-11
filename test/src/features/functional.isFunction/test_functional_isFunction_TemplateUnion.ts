import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_isFunction_TemplateUnion = _test_functional_isFunction(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => TemplateUnion) => typia.functional.isFunction(p),
)