import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createRandom_ArrayUnion = _test_random(
    "ArrayUnion",
    typia.createRandom<ArrayUnion>(),
    typia.createAssert<typia.Primitive<ArrayUnion>>(),
);
