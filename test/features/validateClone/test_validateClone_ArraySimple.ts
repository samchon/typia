import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ArraySimple = _test_validateClone(
    "ArraySimple",
    ArraySimple.generate,
    (input) => TSON.validateClone(input),
    ArraySimple.SPOILERS,
);
