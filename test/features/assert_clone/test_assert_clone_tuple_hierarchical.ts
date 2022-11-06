import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_tuple_hierarchical = _test_assert_clone(
    "hierarchical tuple",
    TupleHierarchical.generate,
    (input) => TSON.assertClone(input),
    TupleHierarchical.SPOILERS,
);
