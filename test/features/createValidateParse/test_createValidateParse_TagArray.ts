import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagArray } from "../../structures/TagArray";

export const test_createValidateParse_TagArray = _test_validateParse(
    "TagArray",
    TagArray.generate,
    typia.createValidateParse<TagArray>(),
    TagArray.SPOILERS,
);
