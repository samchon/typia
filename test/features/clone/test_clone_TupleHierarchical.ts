import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_clone_TupleHierarchical = _test_clone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.clone<TupleHierarchical>(input),
);
