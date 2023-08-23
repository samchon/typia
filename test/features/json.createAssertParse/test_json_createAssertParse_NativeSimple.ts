import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_assertParse_NativeSimple = _test_json_assertParse(
    "NativeSimple",
)<NativeSimple>(NativeSimple)(typia.json.createAssertParse<NativeSimple>());
