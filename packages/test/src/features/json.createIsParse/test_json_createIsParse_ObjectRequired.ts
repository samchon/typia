import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_createIsParse_ObjectRequired = _test_json_isParse(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)(typia.json.createIsParse<ObjectRequired>());
