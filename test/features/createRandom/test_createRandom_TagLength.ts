import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagLength = _test_random(
    "TagLength",
    typia.createRandom<TagLength>(),
    typia.createAssert<typia.Primitive<TagLength>>(),
);