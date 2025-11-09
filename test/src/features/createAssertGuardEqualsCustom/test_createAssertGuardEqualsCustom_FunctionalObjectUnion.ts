import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_FunctionalObjectUnion = (): void => _test_assertGuardEquals(CustomGuardError)(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)(typia.createAssertGuardEquals<FunctionalObjectUnion>((p) => new CustomGuardError(p)));
