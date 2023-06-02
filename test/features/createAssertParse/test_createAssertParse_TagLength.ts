import typia from "../../../src";

import { TagLength } from "../../structures/TagLength";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_TagLength = _test_assertParse(
    "TagLength",
    TagLength.generate,
    typia.createAssertParse<TagLength>(),
    TagLength.SPOILERS,
);
