import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_clone_NativeUnion = _test_clone(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.clone(input),
);
