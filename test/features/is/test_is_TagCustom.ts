import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_is } from "../../internal/_test_is";

export const test_is_TagCustom = _test_is(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.is(input),
    TagCustom.SPOILERS,
);
