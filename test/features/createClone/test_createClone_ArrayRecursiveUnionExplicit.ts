import typia from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArrayRecursiveUnionExplicit = _test_clone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createClone<ArrayRecursiveUnionExplicit>(),
);