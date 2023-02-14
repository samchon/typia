import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagObjectUnion = _test_random(
    "TagObjectUnion",
    typia.createRandom<TagObjectUnion>(),
    typia.createAssert<typia.Primitive<TagObjectUnion>>(),
);