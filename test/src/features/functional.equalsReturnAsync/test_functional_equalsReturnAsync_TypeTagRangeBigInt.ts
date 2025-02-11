import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_equalsReturnAsync_TypeTagRangeBigInt =
  _test_functional_equalsReturnAsync("TypeTagRangeBigInt")(TypeTagRangeBigInt)(
    (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
      typia.functional.equalsReturn(p),
  );
