import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagMatrix = _test_random(
    "TagMatrix",
    typia.createRandom<TagMatrix>(),
    typia.createAssert<TagMatrix>(),
);
