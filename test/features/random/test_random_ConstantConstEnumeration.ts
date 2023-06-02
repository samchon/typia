import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_random_ConstantConstEnumeration = _test_random(
    "ConstantConstEnumeration",
    () => typia.random<ConstantConstEnumeration>(),
    typia.createAssert<typia.Primitive<ConstantConstEnumeration>>(),
);
