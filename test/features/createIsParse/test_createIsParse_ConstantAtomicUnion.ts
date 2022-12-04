import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ConstantAtomicUnion = _test_isParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    TSON.createIsParse<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
