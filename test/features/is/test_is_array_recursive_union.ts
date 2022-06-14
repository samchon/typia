import TSON from "../../../src";
import { IArrayRecursiveUnion } from "../../structures/IArrayRecursiveUnion";
import { _test_is } from "./_test_is";

export const test_is_array_recursive_union = _test_is(
    "recursive union array",
    IArrayRecursiveUnion.generate(),
    (input) => TSON.is(input),
);
