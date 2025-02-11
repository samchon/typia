import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_equalsFunctionAsync_TemplateAtomic = _test_functional_equalsFunctionAsync(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.equalsFunction(p),
)