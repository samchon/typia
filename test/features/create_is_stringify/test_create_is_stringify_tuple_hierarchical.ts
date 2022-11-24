import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_tuple_hierarchical = _test_is_stringify(
    "hierarchical tuple",
    TupleHierarchical.generate,
    TSON.createIsStringify<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
