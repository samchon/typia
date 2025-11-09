import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TypeTagCustom = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)((input) => typia.assertGuard<TypeTagCustom>(input, (p) => new CustomGuardError(p)));
