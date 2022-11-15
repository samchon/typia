import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert } from "../assert/_test_assert";

export const test_create_assert_array_any = _test_assert(
    "any array",
    ArrayAny.generate,
    TSON.createAssert<ArrayAny>(),
    ArrayAny.SPOILERS,
);
