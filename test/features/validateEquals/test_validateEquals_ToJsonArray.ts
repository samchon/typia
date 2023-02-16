import typia from "typia";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ToJsonArray = _test_validateEquals(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.validateEquals(input),
);
