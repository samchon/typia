import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_equalsReturnAsync_TypeTagBigInt =
  _test_functional_equalsReturnAsync("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      typia.functional.equalsReturn(p),
  );
