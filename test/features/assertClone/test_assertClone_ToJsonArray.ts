import typia from "../../../src";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_ToJsonArray = _test_assertClone(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.assertClone(input),
);
