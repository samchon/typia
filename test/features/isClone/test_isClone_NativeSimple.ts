import typia from "typia";

import { NativeSimple } from "../../structures/NativeSimple";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_NativeSimple = _test_isClone(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.isClone(input),
    NativeSimple.SPOILERS,
);
