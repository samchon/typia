import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_tuple_hierarchical = _test_stringify(
    "hierarchical tuple",
    TupleHierarchical.generate(),
    (input) => TSON.stringify(input),
);
