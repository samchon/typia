import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_set_simple = _test_assert_stringify(
    "simple set",
    SetSimple.generate,
    (input) => TSON.assertStringify(input),
    SetSimple.SPOILERS,
);
