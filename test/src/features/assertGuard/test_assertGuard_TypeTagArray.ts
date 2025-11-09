import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_assertGuard_TypeTagArray = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagArray")<TypeTagArray>(TypeTagArray)(
    (input) => typia.assertGuard<TypeTagArray>(input),
  );
