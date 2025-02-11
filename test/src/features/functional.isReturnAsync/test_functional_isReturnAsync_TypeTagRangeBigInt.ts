import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_isReturnAsync_TypeTagRangeBigInt =
  _test_functional_isReturnAsync("TypeTagRangeBigInt")(TypeTagRangeBigInt)(
    (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
      typia.functional.isReturn(p),
  );
