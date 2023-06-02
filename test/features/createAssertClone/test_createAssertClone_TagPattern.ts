import typia from "../../../src";

import { TagPattern } from "../../structures/TagPattern";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_TagPattern = _test_assertClone(
    "TagPattern",
    TagPattern.generate,
    typia.createAssertClone<TagPattern>(),
    TagPattern.SPOILERS,
);
