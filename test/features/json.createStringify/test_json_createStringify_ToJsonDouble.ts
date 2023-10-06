import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_createStringify_ToJsonDouble = _test_json_stringify(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)(typia.json.createStringify<ToJsonDouble>());
