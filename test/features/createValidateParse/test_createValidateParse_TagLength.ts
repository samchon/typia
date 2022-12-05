import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagLength = _test_validateParse(
    "TagLength",
    TagLength.generate,
    TSON.createValidateParse<TagLength>(),
    TagLength.SPOILERS,
);
