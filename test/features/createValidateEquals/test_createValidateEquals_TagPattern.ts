import typia from "typia";

import { TagPattern } from "../../structures/TagPattern";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagPattern = _test_validateEquals(
    "TagPattern",
    TagPattern.generate,
    typia.createValidateEquals<TagPattern>(),
);
