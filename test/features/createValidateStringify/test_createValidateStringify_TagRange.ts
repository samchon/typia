import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_TagRange = _test_validateStringify(
    "TagRange",
    TagRange.generate,
    typia.createValidateStringify<TagRange>(),
    TagRange.SPOILERS,
);
