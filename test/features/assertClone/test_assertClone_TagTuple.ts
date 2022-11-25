import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TagTuple = _test_assertClone(
    "TagTuple",
    TagTuple.generate,
    (input) => TSON.assertClone(input),
    TagTuple.SPOILERS,
);