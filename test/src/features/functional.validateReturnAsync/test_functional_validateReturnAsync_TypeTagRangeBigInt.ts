import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_validateReturnAsync_TypeTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("TypeTagRangeBigInt")(
      TypeTagRangeBigInt,
    )((p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
      typia.functional.validateReturn(p),
    );
