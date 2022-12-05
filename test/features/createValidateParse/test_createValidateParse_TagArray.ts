import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagArray = _test_validateParse(
    "TagArray",
    TagArray.generate,
    TSON.createValidateParse<TagArray>(),
    TagArray.SPOILERS,
);
