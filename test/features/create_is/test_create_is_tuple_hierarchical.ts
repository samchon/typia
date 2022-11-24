import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_is } from "../internal/_test_is";

export const test_create_is_tuple_hierarchical = _test_is(
    "hierarchical tuple",
    TupleHierarchical.generate,
    TSON.createIs<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
