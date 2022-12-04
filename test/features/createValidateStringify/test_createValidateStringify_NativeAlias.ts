import TSON from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_NativeAlias = _test_validateStringify(
    "NativeAlias",
    NativeAlias.generate,
    TSON.createValidateStringify<NativeAlias>(),
    NativeAlias.SPOILERS,
);
