import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assertGuardEquals_ArrayAtomicAlias = (): void =>
  _test_assertGuardEquals(TypeGuardError)("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )((input) => typia.assertGuardEquals<ArrayAtomicAlias>(input));
