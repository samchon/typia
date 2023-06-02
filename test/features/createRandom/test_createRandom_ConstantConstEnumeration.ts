import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createRandom_ConstantConstEnumeration = _test_random(
    "ConstantConstEnumeration",
    typia.createRandom<ConstantConstEnumeration>(),
    typia.createAssert<typia.Primitive<ConstantConstEnumeration>>(),
);
