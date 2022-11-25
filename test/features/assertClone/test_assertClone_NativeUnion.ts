import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_NativeUnion = _test_assertClone(
    "NativeUnion",
    NativeUnion.generate,
    (input) => TSON.assertClone(input),
    NativeUnion.SPOILERS,
);