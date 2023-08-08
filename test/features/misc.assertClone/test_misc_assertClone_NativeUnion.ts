import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_misc_assertClone_NativeUnion = _test_misc_assertClone(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.misc.assertClone(input),
    NativeUnion.SPOILERS,
);
