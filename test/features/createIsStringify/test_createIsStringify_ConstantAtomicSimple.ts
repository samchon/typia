import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createIsStringify_ConstantAtomicSimple = _test_isStringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createIsStringify<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
