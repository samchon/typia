import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_array_any = _test_assert_stringify(
    "any array",
    ArrayAny.generate,
    TSON.createAssertStringify<ArrayAny>(),
    ArrayAny.SPOILERS,
);
