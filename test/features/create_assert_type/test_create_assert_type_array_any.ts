import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_array_any = _test_assert_type(
    "any array",
    ArrayAny.generate,
    TSON.createAssertType<ArrayAny>(),
    ArrayAny.SPOILERS,
);
