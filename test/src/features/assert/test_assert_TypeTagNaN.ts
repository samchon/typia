import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagNaN = _test_assert(TypeGuardError)(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)((input) => typia.assert<TypeTagNaN>(input));
