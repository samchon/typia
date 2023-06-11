import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagLength } from "../../structures/TagLength";

export const test_createValidateParse_TagLength = _test_validateParse(
    "TagLength",
    TagLength.generate,
    typia.createValidateParse<TagLength>(),
    TagLength.SPOILERS,
);
