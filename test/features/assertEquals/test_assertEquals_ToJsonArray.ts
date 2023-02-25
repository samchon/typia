import typia from "../../../src";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ToJsonArray = _test_assertEquals(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.assertEquals(input),
);
