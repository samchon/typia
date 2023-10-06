import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_createIsStringify_NativeSimple = _test_json_isStringify(
    "NativeSimple",
)<NativeSimple>(
    NativeSimple
)(typia.json.createIsStringify<NativeSimple>());
