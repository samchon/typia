import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagLength } from "../../structures/TagLength";

export const test_createRandom_TagLength = _test_random(
    "TagLength",
    typia.createRandom<TagLength>(),
    typia.createAssert<TagLength>(),
);
