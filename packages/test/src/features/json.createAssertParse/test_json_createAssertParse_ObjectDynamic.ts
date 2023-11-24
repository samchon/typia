import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createAssertParse_ObjectDynamic = _test_json_assertParse(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)(typia.json.createAssertParse<ObjectDynamic>());
