import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_createRandom_TagRangeBigInt = _test_random(
    "TagRangeBigInt",
    typia.createRandom<TagRangeBigInt>(),
    typia.createAssert<typia.Primitive<TagRangeBigInt>>(),
);
