import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_random_TagTypeBigInt = _test_random(
    "TagTypeBigInt",
    () => typia.random<TagTypeBigInt>(),
    typia.createAssert<typia.Primitive<TagTypeBigInt>>(),
);
