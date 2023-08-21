import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_assert_TagRangeBigInt = _test_assert(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)((input) =>
    typia.assert<TagRangeBigInt>(input),
);
