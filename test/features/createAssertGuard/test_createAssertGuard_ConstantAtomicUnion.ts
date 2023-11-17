import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertGuard_ConstantAtomicUnion = _test_assertGuard(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)(
    typia.createAssertGuard<ConstantAtomicUnion>(),
);
