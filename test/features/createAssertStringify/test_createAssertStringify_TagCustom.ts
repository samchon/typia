import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_createAssertStringify_TagCustom = _test_assertStringify(
    "TagCustom",
    TagCustom.generate,
    typia.createAssertStringify<TagCustom>(),
    TagCustom.SPOILERS,
);
