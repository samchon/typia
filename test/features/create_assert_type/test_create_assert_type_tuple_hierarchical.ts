import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_tuple_hierarchical = _test_assert_type(
    "hierarchical tuple",
    TupleHierarchical.generate,
    TSON.createAssertType<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
