import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagType } from "../../structures/TagType";

export const test_assertStringify_TagType = _test_assertStringify(
    "TagType",
    TagType.generate,
    (input) => typia.assertStringify<TagType>(input),
    TagType.SPOILERS,
);
