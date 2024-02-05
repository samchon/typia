import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_createAssertParse_ObjectDescription =
  _test_json_assertParse("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )(typia.json.createAssertParse<ObjectDescription>());
