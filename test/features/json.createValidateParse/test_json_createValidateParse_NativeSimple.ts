import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_json_validateParse_NativeSimple = _test_json_validateParse(
    "NativeSimple",
)<NativeSimple>(NativeSimple)(typia.json.createValidateParse<NativeSimple>());
