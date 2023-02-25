import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagTuple = _test_random(
    "TagTuple",
    typia.createRandom<TagTuple>(),
    typia.createAssert<TagTuple>(),
);
