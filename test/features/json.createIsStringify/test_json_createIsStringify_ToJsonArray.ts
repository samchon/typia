import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_createIsStringify_ToJsonArray = _test_json_isStringify(
    "ToJsonArray",
)<ToJsonArray>(ToJsonArray)(typia.json.createIsStringify<ToJsonArray>());
