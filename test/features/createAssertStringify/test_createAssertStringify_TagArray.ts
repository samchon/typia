import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagArray } from "../../structures/TagArray";

export const test_createAssertStringify_TagArray = _test_assertStringify(
    "TagArray",
    TagArray.generate,
    typia.createAssertStringify<TagArray>(),
    TagArray.SPOILERS,
);
