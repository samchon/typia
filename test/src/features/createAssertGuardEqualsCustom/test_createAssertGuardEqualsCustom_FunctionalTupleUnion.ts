import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_FunctionalTupleUnion = (): void => _test_assertGuardEquals(CustomGuardError)(
    "FunctionalTupleUnion",
)<FunctionalTupleUnion>(
    FunctionalTupleUnion
)(typia.createAssertGuardEquals<FunctionalTupleUnion>((p) => new CustomGuardError(p)));
