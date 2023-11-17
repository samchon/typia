import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_createStringify_ObjectTuple = _test_json_stringify(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.json.createStringify<ObjectTuple>());
