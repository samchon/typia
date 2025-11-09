import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateEqualsParametersAsync_TemplateAtomic = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.validateEqualsParameters(p),
)