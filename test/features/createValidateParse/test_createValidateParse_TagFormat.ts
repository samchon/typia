import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagFormat } from "../../structures/TagFormat";

export const test_createValidateParse_TagFormat = _test_validateParse(
    "TagFormat",
    TagFormat.generate,
    typia.createValidateParse<TagFormat>(),
    TagFormat.SPOILERS,
);
