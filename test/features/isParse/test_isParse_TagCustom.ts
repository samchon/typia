import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_TagCustom = _test_isParse(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.isParse<TagCustom>(input),
    TagCustom.SPOILERS,
);
