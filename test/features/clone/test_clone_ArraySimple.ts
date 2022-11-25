import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ArraySimple = _test_clone(
    "ArraySimple",
    ArraySimple.generate,
    (input) => TSON.clone(input),
);