import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createRandom_ConstantAtomicWrapper = _test_random(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)({
    random: typia.createRandom<ConstantAtomicWrapper>(),
    assert: typia.createAssert<ConstantAtomicWrapper>(),
});
