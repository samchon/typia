import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_array_union = _test_assert_clone(
    "union array",
    ArrayUnion.generate,
    TSON.createAssertClone<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
