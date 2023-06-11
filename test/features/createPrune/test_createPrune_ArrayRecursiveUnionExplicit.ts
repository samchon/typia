import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createPrune_ArrayRecursiveUnionExplicit = _test_prune(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createPrune<ArrayRecursiveUnionExplicit>(),
);
