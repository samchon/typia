import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_random_TagTypeBigInt = _test_random(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    random: typia.createRandom<TagTypeBigInt>(),
    assert: typia.createAssert<TagTypeBigInt>(),
});
