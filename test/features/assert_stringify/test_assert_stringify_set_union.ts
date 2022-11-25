import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_set_union = _test_assert_stringify(
    "union set",
    SetUnion.generate,
    (input) => TSON.assertStringify(input),
    SetUnion.SPOILERS,
);
