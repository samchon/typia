import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_clone } from "./_test_clone";

export const test_clone_array_simple = _test_clone(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.clone(input),
);
