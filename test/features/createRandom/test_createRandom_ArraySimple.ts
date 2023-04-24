import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createRandom_ArraySimple = _test_random(
    "ArraySimple",
    typia.createRandom<ArraySimple>(),
    typia.createAssert<typia.Primitive<ArraySimple>>(),
);
