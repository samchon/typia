import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_random_TagObjectUnion = _test_random(
    "TagObjectUnion",
)<TagObjectUnion>(TagObjectUnion)({
    random: typia.createRandom<TagObjectUnion>(),
    assert: typia.createAssert<TagObjectUnion>(),
});
