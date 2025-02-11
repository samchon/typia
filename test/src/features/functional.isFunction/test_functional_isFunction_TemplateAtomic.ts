import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_isFunction_TemplateAtomic = _test_functional_isFunction(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => TemplateAtomic) => typia.functional.isFunction(p),
)