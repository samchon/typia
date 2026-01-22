import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_assert_TypeTagBigInt = (): void =>
  _test_assert(TypeGuardError)("TypeTagBigInt")<TypeTagBigInt>(TypeTagBigInt)(
    (input) => typia.assert<TypeTagBigInt>(input),
  );
