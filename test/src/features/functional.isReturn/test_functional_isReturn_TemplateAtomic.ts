import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_isReturn_TemplateAtomic = _test_functional_isReturn(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => TemplateAtomic) => typia.functional.isReturn(p),
)