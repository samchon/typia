import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_isFunctionAsync_TemplateConstant = _test_functional_isFunctionAsync(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.isFunction(p),
)