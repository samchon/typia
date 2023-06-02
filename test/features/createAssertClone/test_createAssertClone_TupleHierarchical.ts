import typia from "../../../src";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_TupleHierarchical = _test_assertClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createAssertClone<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
