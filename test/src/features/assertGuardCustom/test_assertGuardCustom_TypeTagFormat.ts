import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TypeTagFormat = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.assertGuard<TypeTagFormat>(input, (p) => new CustomGuardError(p)));
