import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_tuple_hierarchical = _test_assert(
    "hierarchical tuple",
    TupleHierarchical.generate,
    TSON.createAssert<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
