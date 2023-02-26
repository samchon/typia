import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createIsParse_ConstantAtomicSimple = _test_isParse(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createIsParse<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
