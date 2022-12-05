import TSON from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TagLength = _test_validateParse(
    "TagLength",
    TagLength.generate,
    (input) => TSON.validateParse<TagLength>(input),
    TagLength.SPOILERS,
);
