import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_NativeUnion = _test_isStringify(
    "NativeUnion",
    NativeUnion.generate,
    (input) => TSON.isStringify(input),
    NativeUnion.SPOILERS,
);
