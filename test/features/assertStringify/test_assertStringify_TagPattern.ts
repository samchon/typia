import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TagPattern = _test_assertStringify(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.assertStringify(input),
    TagPattern.SPOILERS,
);
