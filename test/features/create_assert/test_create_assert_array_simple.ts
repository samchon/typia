import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_array_simple = _test_assert(
    "simple array",
    ArraySimple.generate,
    TSON.createAssertType<ArraySimple>(),
    ArraySimple.SPOILERS,
);
