import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createPrune_ArrayUnion = _test_prune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input: Array<ArrayUnion.IUnion>): void => {},
);
