import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ConstantAtomicUnion = _test_isParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createIsParse<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
