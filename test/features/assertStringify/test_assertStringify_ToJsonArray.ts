import typia from "typia";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ToJsonArray = _test_assertStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.assertStringify(input),
);
