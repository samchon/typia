import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_tag_tuple = _test_assert_type(
    "tuple tag",
    TagTuple.generate,
    TSON.createAssertType<TagTuple>(),
    TagTuple.SPOILERS,
);
