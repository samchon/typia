import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_createValidateStringify_NativeAlias = _test_validateStringify(
    "NativeAlias",
    NativeAlias.generate,
    typia.createValidateStringify<NativeAlias>(),
    NativeAlias.SPOILERS,
);
