import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_SetSimple = _test_assert(
    "SetSimple",
    SetSimple.generate,
    (input) => TSON.assert(input),
    SetSimple.SPOILERS,
);