import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagRange = _test_assert(CustomGuardError)(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.assert<TypeTagRange>(input, (p) => new CustomGuardError(p)));
