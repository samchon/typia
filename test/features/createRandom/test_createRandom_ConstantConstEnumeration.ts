import typia from "../../../src";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ConstantConstEnumeration = _test_random(
    "ConstantConstEnumeration",
    typia.createRandom<ConstantConstEnumeration>(),
    typia.createAssert<typia.Primitive<ConstantConstEnumeration>>(),
);
