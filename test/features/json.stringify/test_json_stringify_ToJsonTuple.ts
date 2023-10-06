import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_stringify_ToJsonTuple = _test_json_stringify(
    "ToJsonTuple",
)<ToJsonTuple>(
    ToJsonTuple
)((input) => typia.json.stringify<ToJsonTuple>(input));
