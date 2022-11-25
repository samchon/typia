import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_SetSimple = _test_assertStringify(
    "SetSimple",
    SetSimple.generate,
    TSON.createAssertStringify<SetSimple>(),
    SetSimple.SPOILERS,
);