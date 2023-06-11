import typia from "../../../src";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_is } from "../../internal/_test_is";

export const test_is_TagMatrix = _test_is(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.is(input),
    TagMatrix.SPOILERS,
);
