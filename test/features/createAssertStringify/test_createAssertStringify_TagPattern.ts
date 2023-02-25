import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TagPattern = _test_assertStringify(
    "TagPattern",
    TagPattern.generate,
    typia.createAssertStringify<TagPattern>(),
    TagPattern.SPOILERS,
);
