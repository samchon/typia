import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_NativeSimple =
    _test_validateStringify(
        "NativeSimple",
        NativeSimple.generate,
        TSON.createValidateStringify<NativeSimple>(),
        NativeSimple.SPOILERS,
    );
