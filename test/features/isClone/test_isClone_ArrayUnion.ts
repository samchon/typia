import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ArrayUnion = _test_isClone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => TSON.isClone(input),
    ArrayUnion.SPOILERS,
);
