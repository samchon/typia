import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertGuardEquals_ObjectOptional = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )((input) => typia.assertGuardEquals<ObjectOptional>(input));
