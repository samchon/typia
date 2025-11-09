import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagTypeUnion = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "TypeTagTypeUnion"
)(TypeTagTypeUnion)(
  (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)