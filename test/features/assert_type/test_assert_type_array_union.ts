import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert_type } from "./_test_assert_type";

export const test_assert_type_array_union = _test_assert_type(
    "union array",
    ArrayUnion.generate,
    (input) => TSON.assertType(input),
    ArrayUnion.SPOILERS,
);
