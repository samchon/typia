import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_tuple_hierarchical = _test_assert(
    "hierarchical tuple",
    TupleHierarchical.generate,
    (input) => TSON.assert(input),
    TupleHierarchical.SPOILERS,
);
