import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_assertStringify_NativeAlias = _test_assertStringify(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.assertStringify(input),
    NativeAlias.SPOILERS,
);
