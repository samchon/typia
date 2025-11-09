import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_TypeTagTypeUnion = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "TypeTagTypeUnion"
)(TypeTagTypeUnion)(
  (p: (input: TypeTagTypeUnion) => Promise<TypeTagTypeUnion>) =>
    typia.functional.assertParameters(p),
)