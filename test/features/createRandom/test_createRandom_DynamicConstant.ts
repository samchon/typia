import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_random_DynamicConstant = _test_random(
    "DynamicConstant",
    typia.createRandom<DynamicConstant>(),
    typia.createAssert<typia.Primitive<DynamicConstant>>(),
);
