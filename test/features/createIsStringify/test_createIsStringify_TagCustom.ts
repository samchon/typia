import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_createIsStringify_TagCustom = _test_isStringify(
    "TagCustom",
    TagCustom.generate,
    typia.createIsStringify<TagCustom>(),
    TagCustom.SPOILERS,
);
