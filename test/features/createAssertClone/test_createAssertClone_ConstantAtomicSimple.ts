import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertClone_ConstantAtomicSimple = _test_assertClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createAssertClone<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
