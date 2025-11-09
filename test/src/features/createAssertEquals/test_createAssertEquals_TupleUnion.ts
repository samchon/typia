import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TupleUnion = (): void => _test_assertEquals(TypeGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)(typia.createAssertEquals<TupleUnion>());
