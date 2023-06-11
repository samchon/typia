import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_isStringify_TagCustom = _test_isStringify(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.isStringify(input),
    TagCustom.SPOILERS,
);
