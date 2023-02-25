import typia from "../../../src";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_is } from "../internal/_test_is";

export const test_is_TagInfinite = _test_is(
    "TagInfinite",
    TagInfinite.generate,
    (input) => typia.is(input),
    TagInfinite.SPOILERS,
);
