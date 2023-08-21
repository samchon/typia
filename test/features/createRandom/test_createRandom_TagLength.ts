import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagLength } from "../../structures/TagLength";

export const test_random_TagLength = _test_random("TagLength")<TagLength>(
    TagLength,
)({
    random: typia.createRandom<TagLength>(),
    assert: typia.createAssert<TagLength>(),
});
