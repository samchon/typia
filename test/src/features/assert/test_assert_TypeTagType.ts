import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagType = _test_assert(TypeGuardError)(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)((input) => typia.assert<TypeTagType>(input));
