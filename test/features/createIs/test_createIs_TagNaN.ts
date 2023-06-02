import typia from "../../../src";

import { TagNaN } from "../../structures/TagNaN";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_TagNaN = _test_is(
    "TagNaN",
    TagNaN.generate,
    typia.createIs<TagNaN>(),
    TagNaN.SPOILERS,
);
