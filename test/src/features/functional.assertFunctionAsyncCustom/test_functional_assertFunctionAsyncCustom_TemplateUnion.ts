import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_TemplateUnion = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)