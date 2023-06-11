import typia from "../../../src";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_ConstantAtomicWrapper = _test_random(
    "ConstantAtomicWrapper",
    typia.createRandom<ConstantAtomicWrapper>(),
typia.createAssert<typia.Primitive<ConstantAtomicWrapper>>(),
);
