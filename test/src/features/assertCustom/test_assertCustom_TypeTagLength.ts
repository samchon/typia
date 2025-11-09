import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagLength = (): void => _test_assert(CustomGuardError)(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.assert<TypeTagLength>(input, (p) => new CustomGuardError(p)));
