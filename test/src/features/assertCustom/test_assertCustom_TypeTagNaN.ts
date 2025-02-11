import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagNaN = _test_assert(CustomGuardError)(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)((input) => typia.assert<TypeTagNaN>(input, (p) => new CustomGuardError(p)));
