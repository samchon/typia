import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_prune_ArrayAtomicAlias = _test_prune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => ((input: ArrayAtomicAlias): void => {})(input),
);
