import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_assertEquals_TagRangeBigInt = _test_assertEquals(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)((input) =>
    typia.assertEquals<TagRangeBigInt>(input),
);
