import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_is } from "./_test_is";

export const test_is_tuple_hierarchical = _test_is(
    "hierarchical tuple",
    TupleHierarchical.generate,
    (input) => TSON.is(input),
);
