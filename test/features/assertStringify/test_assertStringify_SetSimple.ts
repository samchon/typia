import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_SetSimple = _test_assertStringify(
    "SetSimple",
    SetSimple.generate,
    (input) => TSON.assertStringify(input),
    SetSimple.SPOILERS,
);