import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagLength = (): void => _test_assert(TypeGuardError)(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.assert<TypeTagLength>(input));
