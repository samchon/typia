import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertClone_TupleHierarchical = _test_assertClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createAssertClone<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
