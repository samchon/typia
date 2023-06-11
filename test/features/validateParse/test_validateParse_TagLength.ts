import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagLength } from "../../structures/TagLength";

export const test_validateParse_TagLength = _test_validateParse(
    "TagLength",
    TagLength.generate,
    (input) => typia.validateParse<TagLength>(input),
    TagLength.SPOILERS,
);
