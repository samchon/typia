import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_assertParse_ToJsonArray = _test_json_assertParse(
    "ToJsonArray",
)<ToJsonArray>(ToJsonArray)(typia.json.createAssertParse<ToJsonArray>());
