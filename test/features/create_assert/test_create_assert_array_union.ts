import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_array_union = _test_assert(
    "union arrray",
    ArrayUnion.generate,
    TSON.createAssertType<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
