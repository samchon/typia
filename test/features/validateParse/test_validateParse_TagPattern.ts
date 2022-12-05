import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagPattern = _test_validateParse(
    "TagPattern",
    TagPattern.generate,
    (input) => TSON.validateParse<TagPattern>(input),
    TagPattern.SPOILERS,
);
