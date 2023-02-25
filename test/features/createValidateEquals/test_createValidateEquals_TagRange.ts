import typia from "../../../src";

import { TagRange } from "../../structures/TagRange";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagRange = _test_validateEquals(
    "TagRange",
    TagRange.generate,
    typia.createValidateEquals<TagRange>(),
);
