import TSON from "../../../src";
import { RandomGenerator } from "../../internal/RandomGenerator";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_tuple = _test_assert(
    "tuple tag",
    TagTuple.generate,
    (input) => TSON.assert(input),
    TagTuple.SPOILERS,
);
