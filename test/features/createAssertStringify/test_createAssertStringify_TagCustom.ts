import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_TagCustom = _test_assertStringify(
    "TagCustom",
    TagCustom.generate,
    typia.createAssertStringify<TagCustom>(),
    TagCustom.SPOILERS,
);
