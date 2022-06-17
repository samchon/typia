import TSON from "../../../src";
import { ArrayRecursiveUnion } from "../../structures/ArrayRecursiveUnion";
import { _test_is } from "./_test_is";

export const test_is_array_recursive_union = _test_is(
    "recursive union array",
    ArrayRecursiveUnion.generate,
    (input) => TSON.is(input),
);
