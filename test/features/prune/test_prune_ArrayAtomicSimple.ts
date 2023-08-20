import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_prune_ArrayAtomicSimple = _test_prune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.prune<ArrayAtomicSimple>(input),
);
