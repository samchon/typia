import typia from "typia";

import { SetSimple } from "../../structures/SetSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_SetSimple = _test_assertStringify(
    "SetSimple",
    SetSimple.generate,
    typia.createAssertStringify<SetSimple>(),
    SetSimple.SPOILERS,
);
