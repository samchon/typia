import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagPattern } from "../../structures/TagPattern";

export const test_createRandom_TagPattern = _test_random(
    "TagPattern",
    typia.createRandom<TagPattern>(),
    typia.createAssert<typia.Primitive<TagPattern>>(),
);
