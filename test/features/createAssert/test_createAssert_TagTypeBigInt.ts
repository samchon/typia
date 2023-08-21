import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_assert_TagTypeBigInt = _test_assert(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)(typia.createAssert<TagTypeBigInt>());
