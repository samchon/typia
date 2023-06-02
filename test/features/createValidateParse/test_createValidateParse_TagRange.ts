import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagRange } from "../../structures/TagRange";

export const test_createValidateParse_TagRange = _test_validateParse(
    "TagRange",
    TagRange.generate,
    typia.createValidateParse<TagRange>(),
    TagRange.SPOILERS,
);
