import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_createRandom_TagAtomicUnion = _test_random(
    "TagAtomicUnion",
    typia.createRandom<TagAtomicUnion>(),
    typia.createAssert<TagAtomicUnion>(),
);
