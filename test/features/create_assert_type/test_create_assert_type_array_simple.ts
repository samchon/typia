import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_array_simple = _test_assert_type(
    "simple array",
    ArraySimple.generate,
    TSON.createAssertType<ArraySimple>(),
    ArraySimple.SPOILERS,
);
