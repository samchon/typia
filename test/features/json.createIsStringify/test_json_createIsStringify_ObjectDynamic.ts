import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createIsStringify_ObjectDynamic = _test_json_isStringify(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)(typia.json.createIsStringify<ObjectDynamic>());
