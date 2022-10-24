import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_array_simple = _test_assert_stringify(
    "simple array",
    ArraySimple.generate,
    TSON.createAssertStringify<ArraySimple>(),
    ArraySimple.SPOILERS,
);
