import TSON from "../../../src";
import { ArrayRecursiveUnion } from "../../structures/ArrayRecursiveUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_array_recursive_union = _test_stringify(
    "recursive union array",
    ArrayRecursiveUnion.generate(),
    (input) => TSON.stringify(input),
);
