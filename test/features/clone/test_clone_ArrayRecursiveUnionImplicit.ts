import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_clone_ArrayRecursiveUnionImplicit = _test_clone(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.clone(input),
);
