import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagMatrix = _test_assert(
    "TagMatrix",
    TagMatrix.generate,
    TSON.createAssert<TagMatrix>(),
    TagMatrix.SPOILERS,
);