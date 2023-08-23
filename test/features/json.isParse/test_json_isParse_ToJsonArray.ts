import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_json_isParse_ToJsonArray = _test_json_isParse(
    "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input) => typia.json.isParse<ToJsonArray>(input));
