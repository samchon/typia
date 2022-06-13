import TSON from "../../../src";
import { IArraySimple } from "../../structures/IArraySimple";
import { _test_stringify } from "./internal/_test_stringify";

export const test_stringify_array_simple = _test_stringify(
    "simple array",
    IArraySimple.generate(),
    (input) => TSON.stringify(input),
);
