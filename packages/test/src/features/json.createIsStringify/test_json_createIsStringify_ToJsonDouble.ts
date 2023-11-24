import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_createIsStringify_ToJsonDouble = _test_json_isStringify(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)(typia.json.createIsStringify<ToJsonDouble>());
