import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagLength } from "../../structures/TagLength";

export const test_assertStringify_TagLength = _test_assertStringify(
    "TagLength",
    TagLength.generate,
    (input) => typia.assertStringify<TagLength>(input),
    TagLength.SPOILERS,
);
