import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TupleUnion = (): void => _test_assertGuard(CustomGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)(typia.createAssertGuard<TupleUnion>((p) => new CustomGuardError(p)));
