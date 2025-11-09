import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_TemplateConstant = (): void => _test_functional_assertParameters(TypeGuardError)(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => TemplateConstant) => typia.functional.assertParameters(p),
)