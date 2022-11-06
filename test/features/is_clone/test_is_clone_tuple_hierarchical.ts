import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tuple_hierarchical = _test_is_clone(
    "hierarchical tuple",
    TupleHierarchical.generate,
    (input) => TSON.isClone(input),
    TupleHierarchical.SPOILERS,
);
