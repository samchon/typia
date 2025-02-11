import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateEqualsFunctionAsync_TypeTagBigInt = _test_functional_validateEqualsFunctionAsync(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.validateEqualsFunction(p),
)