import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagRange } from "../../structures/TagRange";

export const test_validateParse_TagRange = _test_validateParse(
    "TagRange",
    TagRange.generate,
    (input) => typia.validateParse<TagRange>(input),
    TagRange.SPOILERS,
);
