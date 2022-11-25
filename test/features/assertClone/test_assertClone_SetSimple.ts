import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_SetSimple = _test_assertClone(
    "SetSimple",
    SetSimple.generate,
    (input) => TSON.assertClone(input),
    SetSimple.SPOILERS,
);