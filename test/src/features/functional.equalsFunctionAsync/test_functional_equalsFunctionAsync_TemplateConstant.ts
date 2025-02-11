import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_equalsFunctionAsync_TemplateConstant = _test_functional_equalsFunctionAsync(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.equalsFunction(p),
)