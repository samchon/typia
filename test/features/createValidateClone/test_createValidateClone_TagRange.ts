import typia from "typia";

import { TagRange } from "../../structures/TagRange";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagRange = _test_validateClone(
    "TagRange",
    TagRange.generate,
    typia.createValidateClone<TagRange>(),
    TagRange.SPOILERS,
);
