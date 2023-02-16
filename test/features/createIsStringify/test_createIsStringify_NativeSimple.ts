import typia from "typia";

import { NativeSimple } from "../../structures/NativeSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_NativeSimple = _test_isStringify(
    "NativeSimple",
    NativeSimple.generate,
    typia.createIsStringify<NativeSimple>(),
    NativeSimple.SPOILERS,
);
