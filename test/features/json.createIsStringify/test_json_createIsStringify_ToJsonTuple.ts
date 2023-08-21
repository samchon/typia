import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_json_isStringify_ToJsonTuple = _test_json_isStringify(
    "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)(typia.json.createIsStringify<ToJsonTuple>());
