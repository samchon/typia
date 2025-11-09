import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_TemplateUnion = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.assertEqualsParameters(p),
)