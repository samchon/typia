import typia from "../../../src";

import { SetSimple } from "../../structures/SetSimple";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_SetSimple = _test_assertStringify(
    "SetSimple",
    SetSimple.generate,
    (input) => typia.assertStringify(input),
    SetSimple.SPOILERS,
);
