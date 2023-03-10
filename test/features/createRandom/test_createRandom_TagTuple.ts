import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagTuple } from "../../structures/TagTuple";

export const test_createRandom_TagTuple = _test_random(
    "TagTuple",
    typia.createRandom<TagTuple>(),
    typia.createAssert<TagTuple>(),
);
