import typia from "../../../src";

import { TagArray } from "../../structures/TagArray";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_assertEquals_TagArray = _test_assertEquals(
    "TagArray",
    TagArray.generate,
    (input) => typia.assertEquals(input),
);
