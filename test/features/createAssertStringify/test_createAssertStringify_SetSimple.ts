import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_createAssertStringify_SetSimple = _test_assertStringify(
    "SetSimple",
    SetSimple.generate,
    typia.createAssertStringify<SetSimple>(),
    SetSimple.SPOILERS,
);
