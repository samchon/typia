import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_validateEqualsFunctionAsync_TypeTagRangeBigInt = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "TypeTagRangeBigInt"
)(TypeTagRangeBigInt)(
  (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
    typia.functional.validateEqualsFunction(p),
)