import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_tuple_hierarchical =
    _test_assert_clone(
        "hierarchical tuple",
        TupleHierarchical.generate,
        TSON.createAssertClone<TupleHierarchical>(),
        TupleHierarchical.SPOILERS,
    );
