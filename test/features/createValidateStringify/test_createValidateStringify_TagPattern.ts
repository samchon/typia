import typia from "typia";

import { TagPattern } from "../../structures/TagPattern";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagPattern = _test_validateStringify(
    "TagPattern",
    TagPattern.generate,
    typia.createValidateStringify<TagPattern>(),
    TagPattern.SPOILERS,
);
