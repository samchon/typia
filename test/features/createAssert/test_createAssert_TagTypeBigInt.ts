import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_createAssert_TagTypeBigInt = _test_assert(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    typia.createAssert<TagTypeBigInt>(),
    TagTypeBigInt.SPOILERS,
);
