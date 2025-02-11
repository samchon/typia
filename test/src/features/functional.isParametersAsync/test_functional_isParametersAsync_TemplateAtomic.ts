import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_isParametersAsync_TemplateAtomic = _test_functional_isParametersAsync(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.isParameters(p),
)