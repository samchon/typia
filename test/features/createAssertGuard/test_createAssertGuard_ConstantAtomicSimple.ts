import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertGuard_ConstantAtomicSimple = _test_assertGuard(
    "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)(
    typia.createAssertGuard<ConstantAtomicSimple>(),
);
