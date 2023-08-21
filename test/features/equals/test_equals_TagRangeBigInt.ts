import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_equals_TagRangeBigInt = _test_equals(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)((input) =>
    typia.equals<TagRangeBigInt>(input),
);
