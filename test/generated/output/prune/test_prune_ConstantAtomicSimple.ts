import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_prune_ConstantAtomicSimple = _test_prune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => ((input: ConstantAtomicSimple): void => {})(input),
);
