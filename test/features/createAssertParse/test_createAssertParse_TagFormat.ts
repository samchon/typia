import typia from "../../../src";

import { TagFormat } from "../../structures/TagFormat";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_TagFormat = _test_assertParse(
    "TagFormat",
    TagFormat.generate,
    typia.createAssertParse<TagFormat>(),
    TagFormat.SPOILERS,
);
