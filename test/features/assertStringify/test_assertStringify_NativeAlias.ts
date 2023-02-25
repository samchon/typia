import typia from "../../../src";

import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_NativeAlias = _test_assertStringify(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.assertStringify(input),
    NativeAlias.SPOILERS,
);
