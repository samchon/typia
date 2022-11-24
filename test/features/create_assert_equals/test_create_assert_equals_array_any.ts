import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_array_any = _test_assert_equals(
    "any array",
    ArrayAny.generate,
    TSON.createAssertEquals<ArrayAny>(),
    false,
);
