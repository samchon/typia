import typia from "../../../../src";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ArrayUnion = _test_prune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input: ArrayUnion): void => {},
);
