import TSON from "../../../src";
import { IArrayRecursive } from "../../structures/IArrayRecursive";
import { _test_is } from "./_test_is";

export const test_is_array_recursive = _test_is(
    "recursive array",
    IArrayRecursive.generate(),
    (input) => TSON.is(input),
);
