import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateFunctionAsync_TemplateAtomic = (): Promise<void> => _test_functional_validateFunctionAsync(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.validateFunction(p),
)