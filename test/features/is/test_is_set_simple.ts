import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_set_simple = _test_is(
    "simple set",
    SetSimple.generate,
    (input) => TSON.is(input),
    SetSimple.SPOILERS,
);
