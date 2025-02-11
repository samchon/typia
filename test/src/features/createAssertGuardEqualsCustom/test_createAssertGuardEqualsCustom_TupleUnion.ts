import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TupleUnion = _test_assertGuardEquals(CustomGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)(typia.createAssertGuardEquals<TupleUnion>((p) => new CustomGuardError(p)));
