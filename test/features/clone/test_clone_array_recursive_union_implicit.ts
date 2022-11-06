import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_clone } from "./_test_clone";

export const test_clone_array_recursive_union_implicit = _test_clone(
    "implicit recursive union array",
    ArrayRecursiveUnionImplicit.generate,
    (input) => TSON.clone(input),
);
