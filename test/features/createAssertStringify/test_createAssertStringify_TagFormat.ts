import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TagFormat = _test_assertStringify(
    "TagFormat",
    TagFormat.generate,
    typia.createAssertStringify<TagFormat>(),
    TagFormat.SPOILERS,
);
