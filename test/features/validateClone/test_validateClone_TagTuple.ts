import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagTuple = _test_validateClone(
    "TagTuple",
    TagTuple.generate,
    (input) => TSON.validateClone(input),
    TagTuple.SPOILERS,
);
