import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_isStringify_NativeAlias = _test_isStringify(
    "NativeAlias",
    NativeAlias.generate,
    (input) => typia.isStringify<NativeAlias>(input),
    NativeAlias.SPOILERS,
);
