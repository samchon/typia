import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagFormat = _test_validateParse(
    "TagFormat",
    TagFormat.generate,
    TSON.createValidateParse<TagFormat>(),
    TagFormat.SPOILERS,
);
