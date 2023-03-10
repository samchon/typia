import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_stringify_NativeUnion = _test_stringify(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.stringify(input),
);
