import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagRange = _test_validateClone(
    "TagRange",
    TagRange.generate,
    (input) => TSON.validateClone(input),
    TagRange.SPOILERS,
);
