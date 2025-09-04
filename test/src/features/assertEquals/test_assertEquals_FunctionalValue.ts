import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_assertEquals_FunctionalValue = (): void =>
  _test_assertEquals(TypeGuardError)("FunctionalValue")<FunctionalValue>(
    FunctionalValue,
  )((input) => typia.assertEquals<FunctionalValue>(input));
