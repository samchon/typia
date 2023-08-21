import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_assertParse_ObjectTuple = _test_json_assertParse(
    "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.json.createAssertParse<ObjectTuple>());
