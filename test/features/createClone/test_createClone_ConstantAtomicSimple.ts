import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createClone_ConstantAtomicSimple = _test_clone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createClone<ConstantAtomicSimple>(),
);
