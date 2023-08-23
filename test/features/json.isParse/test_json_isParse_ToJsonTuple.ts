import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_isParse_ToJsonTuple = _test_json_isParse(
    "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) => typia.json.isParse<ToJsonTuple>(input));
