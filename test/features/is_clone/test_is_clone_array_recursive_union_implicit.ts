import TSON from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_recursive_union_implicit =
    _test_is_clone(
        "implicit recursive union array",
        ArrayRecursiveUnionImplicit.generate,
        (input) => TSON.isClone(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
