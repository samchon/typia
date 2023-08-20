import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_assertStringify_TagMatrix = _test_assertStringify(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.assertStringify<TagMatrix>(input),
    TagMatrix.SPOILERS,
);
