import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_isParse_ToJsonNull = _test_json_isParse(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)(typia.json.createIsParse<ToJsonNull>());
