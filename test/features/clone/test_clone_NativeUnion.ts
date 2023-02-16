import typia from "typia";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_NativeUnion = _test_clone(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.clone(input),
);
