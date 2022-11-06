import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_array_simple = _test_assert_clone(
    "simple array",
    ArraySimple.generate,
    TSON.createAssertClone<ArraySimple>(),
    ArraySimple.SPOILERS,
);
