import typia from "typia";

import { TagFormat } from "../../structures/TagFormat";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TagFormat = _test_validateParse(
    "TagFormat",
    TagFormat.generate,
    typia.createValidateParse<TagFormat>(),
    TagFormat.SPOILERS,
);
