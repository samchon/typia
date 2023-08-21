import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_random_TagAtomicUnion = _test_random(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)({
    random: typia.createRandom<TagAtomicUnion>(),
    assert: typia.createAssert<TagAtomicUnion>(),
});
