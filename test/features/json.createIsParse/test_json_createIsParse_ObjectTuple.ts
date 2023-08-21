import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_isParse_ObjectTuple = _test_json_isParse(
    "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.json.createIsParse<ObjectTuple>());
