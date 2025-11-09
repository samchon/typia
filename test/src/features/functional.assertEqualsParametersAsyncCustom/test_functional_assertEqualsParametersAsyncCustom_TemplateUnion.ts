import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_TemplateUnion = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)