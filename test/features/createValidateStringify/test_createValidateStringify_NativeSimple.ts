import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createValidateStringify_NativeSimple =
    _test_validateStringify(
        "NativeSimple",
        NativeSimple.generate,
        typia.createValidateStringify<NativeSimple>(),
        NativeSimple.SPOILERS,
    );
