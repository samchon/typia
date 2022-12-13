import typia from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TupleHierarchical = _test_isParse(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.isParse<TupleHierarchical>(input),
    TupleHierarchical.SPOILERS,
);