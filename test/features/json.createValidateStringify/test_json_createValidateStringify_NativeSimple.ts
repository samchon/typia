import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_validateStringify_NativeSimple =
    _test_json_validateStringify(
        "NativeSimple",
        NativeSimple.generate,
        typia.json.createValidateStringify<NativeSimple>(),
        NativeSimple.SPOILERS,
    );
