import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createRandom_ConstantEnumeration = _test_random(
    "ConstantEnumeration",
    typia.createRandom<ConstantEnumeration>(),
    typia.createAssert<typia.Primitive<ConstantEnumeration>>(),
);
