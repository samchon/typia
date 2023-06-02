import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_TagCustom = _test_assert(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.assert(input),
    TagCustom.SPOILERS,
);
