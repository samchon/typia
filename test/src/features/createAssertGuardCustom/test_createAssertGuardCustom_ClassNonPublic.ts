import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ClassNonPublic = (): void => _test_assertGuard(CustomGuardError)(
    "ClassNonPublic",
)<ClassNonPublic>(
    ClassNonPublic
)(typia.createAssertGuard<ClassNonPublic>((p) => new CustomGuardError(p)));
