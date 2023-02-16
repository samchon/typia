import typia from "typia";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_NativeAlias = _test_isStringify(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.isStringify(input),
    NativeAlias.SPOILERS,
);
