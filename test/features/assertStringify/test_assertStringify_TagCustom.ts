import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_assertStringify_TagCustom = _test_assertStringify(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.assertStringify(input),
    TagCustom.SPOILERS,
);
