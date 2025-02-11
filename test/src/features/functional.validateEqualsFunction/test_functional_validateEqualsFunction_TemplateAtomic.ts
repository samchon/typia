import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateEqualsFunction_TemplateAtomic = _test_functional_validateEqualsFunction(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => TemplateAtomic) => typia.functional.validateEqualsFunction(p),
)