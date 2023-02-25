import typia from "../../../src";

import { TagPattern } from "../../structures/TagPattern";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagPattern = _test_assertEquals(
    "TagPattern",
    TagPattern.generate,
    typia.createAssertEquals<TagPattern>(),
);
