import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_prune } from "../internal/_test_prune";

export const test_prune_ArrayRecursiveUnionImplicit = _test_prune(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.prune(input),
);