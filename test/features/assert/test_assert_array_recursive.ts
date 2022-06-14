import TSON from "../../../src";
import { IArrayRecursive } from "../../structures/IArrayRecursive";
import { _test_assert } from "./_test_assert";

export const test_assert_array_recursive = _test_assert(
    "recursive array",
    IArrayRecursive.generate(),
    (input) => TSON.assert(input),
);
