import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_isStringify_NativeSimple =
    _test_json_isStringify<NativeSimple>(NativeSimple)((input) =>
        typia.json.isStringify<NativeSimple>(input),
    );
