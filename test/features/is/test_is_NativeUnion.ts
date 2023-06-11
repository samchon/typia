import typia from "../../../src";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_is } from "../../internal/_test_is";

export const test_is_NativeUnion = _test_is(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.is(input),
    NativeUnion.SPOILERS,
);
