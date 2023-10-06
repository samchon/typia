import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_createStringify_ToJsonArray = _test_json_stringify(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.json.createStringify<ToJsonArray>());
