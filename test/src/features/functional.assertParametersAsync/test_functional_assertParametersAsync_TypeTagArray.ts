import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_TypeTagArray = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertParameters(p),
)