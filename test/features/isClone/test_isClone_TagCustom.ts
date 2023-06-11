import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_TagCustom = _test_isClone(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.isClone(input),
    TagCustom.SPOILERS,
);
