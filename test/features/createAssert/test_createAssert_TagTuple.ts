import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TagTuple = _test_assert(
    "TagTuple",
    TagTuple.generate,
    TSON.createAssert<TagTuple>(),
    TagTuple.SPOILERS,
);
