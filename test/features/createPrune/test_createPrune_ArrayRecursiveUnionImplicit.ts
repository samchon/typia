import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createPrune_ArrayRecursiveUnionImplicit = _test_prune(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    typia.createPrune<ArrayRecursiveUnionImplicit>(),
);
