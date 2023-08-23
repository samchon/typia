import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_json_assertParse_ToJsonNull = _test_json_assertParse(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) => typia.json.assertParse<ToJsonNull>(input));
