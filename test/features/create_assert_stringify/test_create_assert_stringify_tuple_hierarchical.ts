import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_tuple_hierarchical =
    _test_assert_stringify(
        "hierarchical tuple",
        TupleHierarchical.generate,
        TSON.createAssertStringify<TupleHierarchical>(),
        TupleHierarchical.SPOILERS,
    );
