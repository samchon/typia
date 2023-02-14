import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_DynamicConstant = _test_random(
    "DynamicConstant",
    typia.createRandom<DynamicConstant>(),
    typia.createAssert<typia.Primitive<DynamicConstant>>(),
);