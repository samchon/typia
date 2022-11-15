import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert_clone } from "../assert_clone/_test_assert_clone";

export const test_create_assert_clone_array_any = _test_assert_clone(
    "any array",
    ArrayAny.generate,
    TSON.createAssertClone<ArrayAny>(),
    ArrayAny.SPOILERS,
);
