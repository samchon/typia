import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_assertEquals_TagCustom = _test_assertEquals(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.assertEquals(input),
);
