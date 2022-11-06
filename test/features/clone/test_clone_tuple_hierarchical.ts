import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_clone } from "./_test_clone";

export const test_clone_tuple_hierarchical = _test_clone(
    "hierarchical tuple",
    TupleHierarchical.generate,
    (input) => TSON.clone(input),
);
