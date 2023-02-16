import typia from "typia";

import { TagLength } from "../../structures/TagLength";
import { _test_is } from "../internal/_test_is";

export const test_is_TagLength = _test_is(
    "TagLength",
    TagLength.generate,
    (input) => typia.is(input),
    TagLength.SPOILERS,
);
