import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagMatrix = _test_assert(TypeGuardError)(
    "TypeTagMatrix",
)<TypeTagMatrix>(
    TypeTagMatrix
)((input) => typia.assert<TypeTagMatrix>(input));
