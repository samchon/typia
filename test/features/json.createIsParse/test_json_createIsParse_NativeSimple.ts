import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_isParse_NativeSimple = _test_json_isParse(
    "NativeSimple",
)<NativeSimple>(NativeSimple)(typia.json.createIsParse<NativeSimple>());
