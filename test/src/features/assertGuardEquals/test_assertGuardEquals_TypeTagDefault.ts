import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TypeTagDefault = (): void => _test_assertGuardEquals(TypeGuardError)(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)((input) => typia.assertGuardEquals<TypeTagDefault>(input));
