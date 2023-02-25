import typia from "../../../src";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_random } from "../internal/_test_random";

export const test_random_ConstantAtomicSimple = _test_random(
    "ConstantAtomicSimple",
    () => typia.random<ConstantAtomicSimple>(),
    typia.createAssert<typia.Primitive<ConstantAtomicSimple>>(),
);
