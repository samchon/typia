import TSON from "../../../src";
import { ArrayRecursiveUnion } from "../../structures/ArrayRecursiveUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_array_recursive_union = _test_assert(
    "recursive union array",
    ArrayRecursiveUnion.generate,
    (input) => TSON.assert(input),
);
