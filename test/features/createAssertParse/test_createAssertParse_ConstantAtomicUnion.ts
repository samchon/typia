import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertParse_ConstantAtomicUnion = _test_assertParse(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createAssertParse<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
