import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_random_TagRangeBigInt = _test_random(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)({
    random: () => typia.random<TagRangeBigInt>(),
    assert: typia.createAssert<TagRangeBigInt>(),
});
