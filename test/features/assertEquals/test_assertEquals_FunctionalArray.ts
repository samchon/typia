import typia from "typia";

import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_FunctionalArray = _test_assertEquals(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => typia.assertEquals(input),
);
