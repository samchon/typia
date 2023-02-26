import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_createRandom_TagBigInt = _test_random(
    "TagBigInt",
    typia.createRandom<TagBigInt>(),
    typia.createAssert<TagBigInt>(),
);
