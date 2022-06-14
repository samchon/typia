import TSON from "../../../src";
import { IArrayUnion } from "../../structures/IArrayUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_array_union = _test_stringify(
    "union arrray",
    IArrayUnion.generate(),
    (input) => TSON.stringify(input),
);
