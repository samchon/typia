import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_array_union = _test_assert_type(
    "union array",
    ArrayUnion.generate,
    TSON.createAssertType<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
