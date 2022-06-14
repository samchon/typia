import TSON from "../../../src";
import { IArrayRecursiveUnion } from "../../structures/IArrayRecursiveUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_array_recursive_union = _test_assert(
    "recursive union array",
    IArrayRecursiveUnion.generate(),
    (input) => TSON.assert(input),
);
