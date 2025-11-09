import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TypeTagTypeUnion = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(
    TypeTagTypeUnion
)(typia.createAssertGuard<TypeTagTypeUnion>((p) => new CustomGuardError(p)));
