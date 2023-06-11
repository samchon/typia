import typia from "../../../src";

import { TagBigInt } from "../../structures/TagBigInt";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_TagBigInt = _test_is(
    "TagBigInt",
    TagBigInt.generate,
    typia.createIs<TagBigInt>(),
    TagBigInt.SPOILERS,
);
