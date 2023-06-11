import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagArray } from "../../structures/TagArray";

export const test_createRandom_TagArray = _test_random(
    "TagArray",
    typia.createRandom<TagArray>(),
    typia.createAssert<typia.Primitive<TagArray>>(),
);
