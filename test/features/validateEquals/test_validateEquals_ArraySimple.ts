import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ArraySimple = _test_validateEquals(
    "ArraySimple",
    ArraySimple.generate,
    (input) => TSON.validateEquals(input),
);