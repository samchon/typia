import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagPattern } from "../../structures/TagPattern";

export const test_random_TagPattern = _test_random<TagPattern>(TagPattern)({
    random: typia.createRandom<TagPattern>(),
    assert: typia.createAssert<TagPattern>(),
});
