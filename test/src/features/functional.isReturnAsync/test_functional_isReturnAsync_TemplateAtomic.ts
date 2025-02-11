import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_isReturnAsync_TemplateAtomic = _test_functional_isReturnAsync(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.isReturn(p),
)