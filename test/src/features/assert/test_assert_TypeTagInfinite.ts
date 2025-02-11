import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagInfinite = _test_assert(TypeGuardError)(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)((input) => typia.assert<TypeTagInfinite>(input));
