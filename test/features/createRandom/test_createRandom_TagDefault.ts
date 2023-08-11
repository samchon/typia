import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagDefault } from "../../structures/TagDefault";

export const test_random_TagDefault = _test_random<TagDefault>(TagDefault)({
    random: typia.createRandom<TagDefault>(),
    assert: typia.createAssert<TagDefault>(),
});
