import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagType } from "../../structures/TypeTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagType = _test_assert(CustomGuardError)(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)((input) => typia.assert<TypeTagType>(input, (p) => new CustomGuardError(p)));
