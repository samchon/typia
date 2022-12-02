import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TagMatrix = _test_assertStringify(
    "TagMatrix",
    TagMatrix.generate,
    TSON.createAssertStringify<TagMatrix>(),
    TagMatrix.SPOILERS,
);
