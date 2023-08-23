import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_assertParse_ToJsonDouble = _test_json_assertParse(
    "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)(typia.json.createAssertParse<ToJsonDouble>());
