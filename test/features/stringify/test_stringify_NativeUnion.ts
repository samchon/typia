import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_NativeUnion = _test_stringify(
    "NativeUnion",
    NativeUnion.generate,
    (input) => TSON.stringify(input),
);
