import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_assert_TagRangeBigInt = _test_assert(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    (input) => typia.assert<TagRangeBigInt>(input),
    TagRangeBigInt.SPOILERS,
);
