import typia from "typia";

import { NativeSimple } from "../../structures/NativeSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_NativeSimple = _test_stringify(
    "NativeSimple",
    NativeSimple.generate,
    typia.createStringify<NativeSimple>(),
);
