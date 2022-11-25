import TSON from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_SetSimple = _test_stringify(
    "SetSimple",
    SetSimple.generate,
    (input) => TSON.stringify(input),
);
