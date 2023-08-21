import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_random_TagArrayUnion = _test_random(
    "TagArrayUnion",
)<TagArrayUnion>(TagArrayUnion)({
    random: typia.createRandom<TagArrayUnion>(),
    assert: typia.createAssert<TagArrayUnion>(),
});
