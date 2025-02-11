import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createIs_TupleHierarchical = _test_is(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)(typia.createIs<TupleHierarchical>());
