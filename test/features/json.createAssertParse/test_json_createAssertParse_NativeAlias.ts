import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_json_assertParse_NativeAlias = _test_json_assertParse(
    "NativeAlias",
)<NativeAlias>(NativeAlias)(typia.json.createAssertParse<NativeAlias>());
