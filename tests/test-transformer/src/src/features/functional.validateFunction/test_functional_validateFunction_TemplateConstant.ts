import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateFunction_TemplateConstant = (): void => _test_functional_validateFunction(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => TemplateConstant) => typia.functional.validateFunction(p),
)