import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_prune_ArrayUnion = _test_prune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.prune(input),
);
