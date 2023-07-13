import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_random_TagMatrix = _test_random(
    "TagMatrix",
    typia.createRandom<TagMatrix>(),
    typia.createAssert<typia.Primitive<TagMatrix>>(),
);
