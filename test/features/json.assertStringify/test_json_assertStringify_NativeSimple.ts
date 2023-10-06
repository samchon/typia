import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_assertStringify_NativeSimple = _test_json_assertStringify(
    "NativeSimple",
)<NativeSimple>(
    NativeSimple
)((input) => typia.json.assertStringify<NativeSimple>(input));
