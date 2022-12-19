import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ConstantAtomicSimple = _test_assertEquals(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createAssertEquals<ConstantAtomicSimple>(),
);