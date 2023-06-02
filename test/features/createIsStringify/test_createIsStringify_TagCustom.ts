import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_createIsStringify_TagCustom = _test_isStringify(
    "TagCustom",
    TagCustom.generate,
    typia.createIsStringify<TagCustom>(),
    TagCustom.SPOILERS,
);
