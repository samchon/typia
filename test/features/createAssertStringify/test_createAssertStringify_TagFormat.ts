import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagFormat } from "../../structures/TagFormat";

export const test_createAssertStringify_TagFormat = _test_assertStringify(
    "TagFormat",
    TagFormat.generate,
    typia.createAssertStringify<TagFormat>(),
    TagFormat.SPOILERS,
);
