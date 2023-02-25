import typia from "../../../src";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ArrayAtomicSimple = _test_prune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.prune(input),
);
