import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createClone_ArrayRecursiveUnionImplicit = _test_clone(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    typia.createClone<ArrayRecursiveUnionImplicit>(),
);
