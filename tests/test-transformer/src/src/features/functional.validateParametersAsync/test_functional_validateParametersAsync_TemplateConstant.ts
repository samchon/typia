import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateParametersAsync_TemplateConstant = (): Promise<void> => _test_functional_validateParametersAsync(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.validateParameters(p),
)