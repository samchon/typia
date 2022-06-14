import TSON from "../../../src";
import { IArraySimple } from "../../structures/IArraySimple";
import { _test_is } from "./_test_is";

export const test_is_array_simple = _test_is(
    "simple array",
    IArraySimple.generate(),
    (input) => TSON.is(input),
);
