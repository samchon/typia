import TSON from "../../../src";
import { IArrayRecursiveUnion } from "../../structures/IArrayRecursiveUnion";
import { _test_stringify } from "./internal/_test_stringify";

export const test_stringify_array_recursive_union = _test_stringify(
    "recursive union array",
    IArrayRecursiveUnion.generate(),
    (input) => TSON.stringify(input),
);
