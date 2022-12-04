import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagType = _test_validateParse(
    "TagType",
    TagType.generate,
    (input) => TSON.validateParse<TagType>(input),
    TagType.SPOILERS,
);
