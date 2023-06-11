import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createClone_ConstantAtomicUnion = _test_clone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createClone<ConstantAtomicUnion>(),
);
