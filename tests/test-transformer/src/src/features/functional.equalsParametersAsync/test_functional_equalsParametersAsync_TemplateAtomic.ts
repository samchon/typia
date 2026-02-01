import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_equalsParametersAsync_TemplateAtomic = (): Promise<void> => _test_functional_equalsParametersAsync(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.equalsParameters(p),
)