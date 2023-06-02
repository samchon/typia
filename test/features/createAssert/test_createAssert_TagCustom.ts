import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_TagCustom = _test_assert(
    "TagCustom",
    TagCustom.generate,
    typia.createAssert<TagCustom>(),
    TagCustom.SPOILERS,
);
