import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagTypeUnion = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "TypeTagTypeUnion"
)(TypeTagTypeUnion)(
  (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)