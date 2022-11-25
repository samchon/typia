import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_NativeSimple = _test_stringify(
    "NativeSimple",
    NativeSimple.generate,
    (input) => TSON.stringify(input),
);
