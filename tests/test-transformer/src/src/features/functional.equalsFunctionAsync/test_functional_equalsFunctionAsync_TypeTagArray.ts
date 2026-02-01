import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_equalsFunctionAsync_TypeTagArray = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.equalsFunction(p),
)