import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_assertStringify_ObjectDescription =
  _test_json_assertStringify("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )((input) => typia.json.assertStringify<ObjectDescription>(input));
