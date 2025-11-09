import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_TemplateConstant = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "TemplateConstant"
)(TemplateConstant)(
  (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)