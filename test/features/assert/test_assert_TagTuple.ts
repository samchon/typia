import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagTuple = _test_assert(
    "TagTuple",
    TagTuple.generate,
    (input) => TSON.assert(input),
    TagTuple.SPOILERS,
);