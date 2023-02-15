import typia from "typia";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TupleHierarchical = _test_isClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createIsClone<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
