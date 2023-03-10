import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagType } from "../../structures/TagType";

export const test_createValidateParse_TagType = _test_validateParse(
    "TagType",
    TagType.generate,
    typia.createValidateParse<TagType>(),
    TagType.SPOILERS,
);
