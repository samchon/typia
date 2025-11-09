import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TypeTagFormat = (): void => _test_assert(CustomGuardError)(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.assert<TypeTagFormat>(input, (p) => new CustomGuardError(p)));
