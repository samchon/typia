import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_TagRange = _test_validate(
    "TagRange",
    TagRange.generate,
    typia.createValidate<TagRange>(),
    TagRange.SPOILERS,
);
