import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createAssert_TagMatrix = _test_assert(
    "TagMatrix",
    TagMatrix.generate,
    typia.createAssert<TagMatrix>(),
    TagMatrix.SPOILERS,
);
