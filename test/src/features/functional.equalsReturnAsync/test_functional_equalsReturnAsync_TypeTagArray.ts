import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_equalsReturnAsync_TypeTagArray = _test_functional_equalsReturnAsync(
  "TypeTagArray"
)(TypeTagArray)(
  (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.equalsReturn(p),
)