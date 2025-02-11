import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_isParameters_TemplateAtomic = _test_functional_isParameters(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => TemplateAtomic) => typia.functional.isParameters(p),
)