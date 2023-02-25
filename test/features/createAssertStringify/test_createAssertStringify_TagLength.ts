import typia from "../../../src";

import { TagLength } from "../../structures/TagLength";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TagLength = _test_assertStringify(
    "TagLength",
    TagLength.generate,
    typia.createAssertStringify<TagLength>(),
    TagLength.SPOILERS,
);
