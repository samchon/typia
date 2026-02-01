import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_isReturnAsync_TemplateConstant = (): Promise<void> => _test_functional_isReturnAsync(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.isReturn(p),
)