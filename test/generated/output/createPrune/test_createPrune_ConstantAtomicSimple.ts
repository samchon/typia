import typia from "../../../../src";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ConstantAtomicSimple = _test_prune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input: ConstantAtomicSimple): void => {},
);
