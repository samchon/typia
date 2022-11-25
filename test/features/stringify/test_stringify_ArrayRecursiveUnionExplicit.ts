import TSON from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ArrayRecursiveUnionExplicit = _test_stringify(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => TSON.stringify(input),
);