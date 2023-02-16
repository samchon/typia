import typia from "typia";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ToJsonArray = _test_isClone(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.isClone(input),
);
