import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createRandom_ConstantAtomicWrapper = _test_random(
    "ConstantAtomicWrapper",
    typia.createRandom<ConstantAtomicWrapper>(),
    typia.createAssert<ConstantAtomicWrapper>(),
);
