import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagTuple } from "../../structures/TagTuple";

export const test_createAssert_TagTuple = _test_assert(
    "TagTuple",
    TagTuple.generate,
    typia.createAssert<TagTuple>(),
    TagTuple.SPOILERS,
);
