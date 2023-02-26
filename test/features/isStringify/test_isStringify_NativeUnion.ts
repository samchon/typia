import typia from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_NativeUnion = _test_isStringify(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.isStringify(input),
    NativeUnion.SPOILERS,
);
