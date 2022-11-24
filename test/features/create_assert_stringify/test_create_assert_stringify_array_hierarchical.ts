import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_array_hierarchical =
    _test_assert_stringify(
        "hierarchical array",
        ArrayHierarchical.generate,
        TSON.createAssertStringify<ArrayHierarchical>(),
        ArrayHierarchical.SPOILERS,
    );
