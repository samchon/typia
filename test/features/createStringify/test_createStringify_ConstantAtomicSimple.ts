import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createStringify_ConstantAtomicSimple = _test_stringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createStringify<ConstantAtomicSimple>(),
);
