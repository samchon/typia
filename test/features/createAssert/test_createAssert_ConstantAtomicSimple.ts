import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ConstantAtomicSimple = _test_assert(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    TSON.createAssert<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
