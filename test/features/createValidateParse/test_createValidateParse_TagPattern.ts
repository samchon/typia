import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagPattern = _test_validateParse(
    "TagPattern",
    TagPattern.generate,
    TSON.createValidateParse<TagPattern>(),
    TagPattern.SPOILERS,
);
