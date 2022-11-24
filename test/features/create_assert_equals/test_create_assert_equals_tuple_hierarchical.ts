import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_tuple_hierarchical = _test_assert_equals(
    "hierarchical tuple",
    TupleHierarchical.generate,
    TSON.createAssertEquals<TupleHierarchical>(),
);
