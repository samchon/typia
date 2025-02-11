import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertReturnAsync_TypeTagBigInt =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.assertReturn(p),
  );
