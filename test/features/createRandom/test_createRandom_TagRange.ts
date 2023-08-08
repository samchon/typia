import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagRange } from "../../structures/TagRange";

export const test_random_TagRange = _test_random(
    "TagRange",
    typia.createRandom<TagRange>(),
    typia.createAssert<typia.Primitive<TagRange>>(),
);
