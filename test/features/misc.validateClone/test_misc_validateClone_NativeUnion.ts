import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_misc_validateClone_NativeUnion = _test_misc_validateClone(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.misc.validateClone(input),
    NativeUnion.SPOILERS,
);
