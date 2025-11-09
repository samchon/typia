import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_assertGuardEquals_TypeTagNaN = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)(
    (input) => typia.assertGuardEquals<TypeTagNaN>(input),
  );
