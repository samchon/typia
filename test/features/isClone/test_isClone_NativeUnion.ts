import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_NativeUnion = _test_isClone(
    "NativeUnion",
    NativeUnion.generate,
    (input) => TSON.isClone(input),
    NativeUnion.SPOILERS,
);
