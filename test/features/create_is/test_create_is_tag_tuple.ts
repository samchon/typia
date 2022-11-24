import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagTuple } from "../../structures/TagTuple";
import { _test_is } from "../internal/_test_is";

export const test_create_is_tag_tuple = _test_is(
    "tuple tag",
    TagTuple.generate,
    TSON.createIs<TagTuple>(),
    TagTuple.SPOILERS,
);
