import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_createStringify_ObjectDate = _test_json_stringify(
  "ObjectDate",
)<ObjectDate>(ObjectDate)(typia.json.createStringify<ObjectDate>());
