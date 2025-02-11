import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagInfinite = _test_assert(CustomGuardError)(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)((input) => typia.assert<TypeTagInfinite>(input, (p) => new CustomGuardError(p)));
