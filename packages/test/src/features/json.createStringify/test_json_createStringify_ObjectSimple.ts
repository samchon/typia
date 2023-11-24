import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_createStringify_ObjectSimple = _test_json_stringify(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)(typia.json.createStringify<ObjectSimple>());
