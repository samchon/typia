import typia from "../../../src";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_TagInfinite = _test_is(
    "TagInfinite",
    TagInfinite.generate,
    typia.createIs<TagInfinite>(),
    TagInfinite.SPOILERS,
);
