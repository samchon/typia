import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_random } from "../internal/_test_random";

export const test_random_ConstantConstEnumeration = _test_random(
    "ConstantConstEnumeration",
    () => typia.random<ConstantConstEnumeration>(),
    typia.createAssert<typia.Primitive<ConstantConstEnumeration>>(),
);