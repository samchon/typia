import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_isReturnAsync_TypeTagBigInt = (): Promise<void> =>
  _test_functional_isReturnAsync("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      typia.functional.isReturn(p),
  );
