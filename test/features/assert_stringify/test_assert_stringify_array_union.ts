import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_array_union = _test_assert_stringify(
    "union array",
    ArrayUnion.generate,
    (input) => TSON.assertStringify(input),
    ArrayUnion.SPOILERS,
);
