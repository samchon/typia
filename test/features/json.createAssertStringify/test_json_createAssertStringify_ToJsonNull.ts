import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_assertStringify_ToJsonNull = _test_json_assertStringify(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)(typia.json.createAssertStringify<ToJsonNull>());
