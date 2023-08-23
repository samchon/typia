import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_assertParse_ToJsonTuple = _test_json_assertParse(
    "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)(typia.json.createAssertParse<ToJsonTuple>());
