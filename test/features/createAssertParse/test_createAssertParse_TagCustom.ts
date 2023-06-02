import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_TagCustom = _test_assertParse(
    "TagCustom",
    TagCustom.generate,
    typia.createAssertParse<TagCustom>(),
    TagCustom.SPOILERS,
);
