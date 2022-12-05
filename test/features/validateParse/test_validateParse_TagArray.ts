import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagArray = _test_validateParse(
    "TagArray",
    TagArray.generate,
    (input) => TSON.validateParse<TagArray>(input),
    TagArray.SPOILERS,
);
