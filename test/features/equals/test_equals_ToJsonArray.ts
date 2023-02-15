import typia from "typia";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonArray = _test_equals(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.equals(input),
);
