import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_NativeAlias = _test_assertStringify(
    "NativeAlias",
    NativeAlias.generate,
    TSON.createAssertStringify<NativeAlias>(),
    NativeAlias.SPOILERS,
);
