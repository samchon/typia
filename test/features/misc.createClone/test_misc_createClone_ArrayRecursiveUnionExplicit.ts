import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_clone_ArrayRecursiveUnionExplicit = _test_misc_clone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    typia.misc.createClone<ArrayRecursiveUnionExplicit>(),
);
