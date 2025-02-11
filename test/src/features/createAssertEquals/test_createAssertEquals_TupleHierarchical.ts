import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TupleHierarchical = _test_assertEquals(TypeGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)(typia.createAssertEquals<TupleHierarchical>());
