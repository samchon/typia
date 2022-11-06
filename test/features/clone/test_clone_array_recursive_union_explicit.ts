import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_clone } from "./_test_clone";

export const test_clone_array_recursive_union_explicit = _test_clone(
    "recursive union array",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.clone(input),
);
