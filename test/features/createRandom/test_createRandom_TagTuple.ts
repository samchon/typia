import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagTuple } from "../../structures/TagTuple";

export const test_random_TagTuple = _test_random("TagTuple")<TagTuple>(
    TagTuple,
)({
    random: typia.createRandom<TagTuple>(),
    assert: typia.createAssert<TagTuple>(),
});
