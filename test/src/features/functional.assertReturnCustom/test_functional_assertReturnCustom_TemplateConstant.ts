import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TemplateConstant = (): void => _test_functional_assertReturn(CustomGuardError)(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => TemplateConstant) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)