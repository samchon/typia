import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createIsParse_ConstantAtomicUnion = _test_isParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createIsParse<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
