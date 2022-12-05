import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagRange = _test_validateParse(
    "TagRange",
    TagRange.generate,
    (input) => TSON.validateParse<TagRange>(input),
    TagRange.SPOILERS,
);
