import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagPattern = _test_validateClone(
    "TagPattern",
    TagPattern.generate,
    (input) => TSON.validateClone(input),
    TagPattern.SPOILERS,
);
