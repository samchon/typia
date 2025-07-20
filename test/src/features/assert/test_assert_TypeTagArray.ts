import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_assert_TypeTagArray = (): void =>
  _test_assert(TypeGuardError)("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    (input) => typia.assert<TypeTagArray>(input),
  );
