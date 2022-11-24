import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_tuple_hierarchical = _test_clone(
    "hierarchical tuple",
    TupleHierarchical.generate,
    TSON.createClone<TupleHierarchical>(),
);
