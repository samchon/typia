import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_NativeAlias = _test_isStringify(
    "NativeAlias",
    NativeAlias.generate,
    TSON.createIsStringify<NativeAlias>(),
    NativeAlias.SPOILERS,
);