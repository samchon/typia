import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagPattern } from "../../structures/TagPattern";

export const test_createValidateParse_TagPattern = _test_validateParse(
    "TagPattern",
    TagPattern.generate,
    typia.createValidateParse<TagPattern>(),
    TagPattern.SPOILERS,
);
