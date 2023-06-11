import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_createIsStringify_NativeAlias = _test_isStringify(
    "NativeAlias",
    NativeAlias.generate,
    typia.createIsStringify<NativeAlias>(),
    NativeAlias.SPOILERS,
);
