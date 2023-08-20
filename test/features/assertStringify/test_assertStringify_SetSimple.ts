import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_assertStringify_SetSimple = _test_assertStringify(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.assertStringify<SetSimple>(input),
    SetSimple.SPOILERS,
);
