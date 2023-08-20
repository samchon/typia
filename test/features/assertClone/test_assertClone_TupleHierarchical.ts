import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertClone_TupleHierarchical = _test_assertClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.assertClone<TupleHierarchical>(input),
    TupleHierarchical.SPOILERS,
);
