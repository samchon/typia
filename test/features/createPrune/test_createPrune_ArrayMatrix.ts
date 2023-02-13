import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ArrayMatrix = _test_prune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createPrune<ArrayMatrix>(),
);