import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_tuple_hierarchical = _test_is_clone(
    "hierarchical tuple",
    TupleHierarchical.generate,
    TSON.createIsClone<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
