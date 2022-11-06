import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_array_union = _test_is_clone(
    "union array",
    ArrayUnion.generate,
    (input) => TSON.isClone(input),
    ArrayUnion.SPOILERS,
);
