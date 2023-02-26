import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagLength } from "../../structures/TagLength";

export const test_createAssertStringify_TagLength = _test_assertStringify(
    "TagLength",
    TagLength.generate,
    typia.createAssertStringify<TagLength>(),
    TagLength.SPOILERS,
);
