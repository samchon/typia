import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_TagCustom = _test_isParse(
    "TagCustom",
    TagCustom.generate,
    typia.createIsParse<TagCustom>(),
    TagCustom.SPOILERS,
);
