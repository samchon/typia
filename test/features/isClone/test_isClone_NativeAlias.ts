import typia from "typia";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_NativeAlias = _test_isClone(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.isClone(input),
    NativeAlias.SPOILERS,
);
