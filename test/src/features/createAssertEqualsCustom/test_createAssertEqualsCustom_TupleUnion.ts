import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TupleUnion = _test_assertEquals(CustomGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)(typia.createAssertEquals<TupleUnion>((p) => new CustomGuardError(p)));
