import typia from "../../../src";

import { NativeSimple } from "../../structures/NativeSimple";
import { _test_is } from "../../internal/_test_is";

export const test_is_NativeSimple = _test_is(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.is(input),
    NativeSimple.SPOILERS,
);
