import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createAssertParse_ConstantAtomicSimple = _test_assertParse(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createAssertParse<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
