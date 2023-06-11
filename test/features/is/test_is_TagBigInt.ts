import typia from "../../../src";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_is } from "../../internal/_test_is";

export const test_is_TagBigInt = _test_is(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.is(input),
    TagBigInt.SPOILERS,
);
