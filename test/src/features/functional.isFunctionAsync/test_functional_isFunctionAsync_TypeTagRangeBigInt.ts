import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_isFunctionAsync_TypeTagRangeBigInt = (): Promise<void> => _test_functional_isFunctionAsync(
  "TypeTagRangeBigInt"
)(TypeTagRangeBigInt)(
  (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
    typia.functional.isFunction(p),
)