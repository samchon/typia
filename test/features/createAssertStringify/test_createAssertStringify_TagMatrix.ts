import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createAssertStringify_TagMatrix = _test_assertStringify(
    "TagMatrix",
    TagMatrix.generate,
    typia.createAssertStringify<TagMatrix>(),
    TagMatrix.SPOILERS,
);
