import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TagArray = _test_assertStringify(
    "TagArray",
    TagArray.generate,
    TSON.createAssertStringify<TagArray>(),
    TagArray.SPOILERS,
);