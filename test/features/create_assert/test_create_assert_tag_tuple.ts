import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_tag_tuple = _test_assert(
    "tuple tag",
    TagTuple.generate,
    TSON.createAssert<TagTuple>(),
    TagTuple.SPOILERS,
);
