import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_NativeAlias = _test_isStringify(
    "NativeAlias",
    NativeAlias.generate,
    (input) => TSON.isStringify(input),
    NativeAlias.SPOILERS,
);
