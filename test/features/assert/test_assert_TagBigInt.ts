import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TagBigInt = _test_assert(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.assert(input),
    TagBigInt.SPOILERS,
);