import TSON from "../../../src";
import { IArrayRecursive } from "../../structures/IArrayRecursive";
import { _test_stringify } from "./internal/_test_stringify";

export const test_stringify_array_recursive = _test_stringify(
    "recursive array",
    IArrayRecursive.generate(),
    (input) => TSON.stringify(input),
);
