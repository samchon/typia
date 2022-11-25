import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_SetUnion = _test_assert(
    "SetUnion",
    SetUnion.generate,
    (input) => TSON.assert(input),
    SetUnion.SPOILERS,
);