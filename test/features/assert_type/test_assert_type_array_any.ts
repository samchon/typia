import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_array_any = _test_assert_type(
    "any array",
    ArrayAny.generate,
    (input) => TSON.assertType(input),
    ArrayAny.SPOILERS,
);
