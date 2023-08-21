import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagFormat } from "../../structures/TagFormat";

export const test_random_TagFormat = _test_random("TagFormat")<TagFormat>(
    TagFormat,
)({
    random: typia.createRandom<TagFormat>(),
    assert: typia.createAssert<TagFormat>(),
});
