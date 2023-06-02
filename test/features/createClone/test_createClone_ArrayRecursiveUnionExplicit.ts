import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createClone_ArrayRecursiveUnionExplicit = _test_clone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.createClone<ArrayRecursiveUnionExplicit>(),
);
