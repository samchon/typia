import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagNaN } from "../../structures/TagNaN";

export const test_createRandom_TagNaN = _test_random(
    "TagNaN",
    typia.createRandom<TagNaN>(),
    typia.createAssert<TagNaN>(),
);
