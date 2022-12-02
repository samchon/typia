import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ArrayRecursiveUnionExplicit = _test_clone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.clone(input),
);
