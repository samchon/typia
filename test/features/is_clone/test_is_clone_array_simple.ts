import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_simple = _test_is_clone(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.isClone(input),
    ArraySimple.SPOILERS,
);
