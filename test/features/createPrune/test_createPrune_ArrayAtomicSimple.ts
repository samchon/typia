import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ArrayAtomicSimple = _test_prune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createPrune<ArrayAtomicSimple>(),
);
