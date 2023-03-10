import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createIsStringify_TagMatrix = _test_isStringify(
    "TagMatrix",
    TagMatrix.generate,
    typia.createIsStringify<TagMatrix>(),
    TagMatrix.SPOILERS,
);
