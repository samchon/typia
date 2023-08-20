import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_random_TagRangeBigInt = _test_random(
    "TagRangeBigInt",
    () => typia.random<TagRangeBigInt>(),
    typia.createAssert<typia.Primitive<TagRangeBigInt>>(),
);
