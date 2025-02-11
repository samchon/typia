import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TypeTagInfinite = _test_assert(CustomGuardError)(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)(typia.createAssert<TypeTagInfinite>((p) => new CustomGuardError(p)));
