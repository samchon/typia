import typia from "../../../src";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_is } from "../../internal/_test_is";

export const test_is_NativeAlias = _test_is(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.is(input),
    NativeAlias.SPOILERS,
);
