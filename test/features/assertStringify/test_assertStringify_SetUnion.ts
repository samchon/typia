import typia from "typia";

import { SetUnion } from "../../structures/SetUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_SetUnion = _test_assertStringify(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.assertStringify(input),
    SetUnion.SPOILERS,
);
