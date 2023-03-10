import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagArray } from "../../structures/TagArray";

export const test_assertStringify_TagArray = _test_assertStringify(
    "TagArray",
    TagArray.generate,
    (input) => typia.assertStringify(input),
    TagArray.SPOILERS,
);
