import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagType } from "../../structures/TagType";

export const test_json_assertStringify_TagType = _test_json_assertStringify(
    "TagType",
    TagType.generate,
    typia.json.createAssertStringify<TagType>(),
    TagType.SPOILERS,
);
