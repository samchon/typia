import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_validateEqualsReturnAsync_TypeTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("TypeTagRangeBigInt")(
      TypeTagRangeBigInt,
    )((p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
      typia.functional.validateEqualsReturn(p),
    );
