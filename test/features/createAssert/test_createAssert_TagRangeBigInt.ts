import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_createAssert_TagRangeBigInt = _test_assert(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    typia.createAssert<TagRangeBigInt>(),
    TagRangeBigInt.SPOILERS,
);
