import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_array_recursive_union_explicit = _test_stringify(
    "recursive union array",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.stringify(input),
);
