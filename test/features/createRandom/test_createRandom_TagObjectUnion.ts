import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createRandom_TagObjectUnion = _test_random(
    "TagObjectUnion",
    typia.createRandom<TagObjectUnion>(),
    typia.createAssert<typia.Primitive<TagObjectUnion>>(),
);
