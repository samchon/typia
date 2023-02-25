import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagType = _test_validateParse(
    "TagType",
    TagType.generate,
    typia.createValidateParse<TagType>(),
    TagType.SPOILERS,
);
