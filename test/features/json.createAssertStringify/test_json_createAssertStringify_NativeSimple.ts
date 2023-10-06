import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_createAssertStringify_NativeSimple = _test_json_assertStringify(
    "NativeSimple",
)<NativeSimple>(
    NativeSimple
)(typia.json.createAssertStringify<NativeSimple>());
