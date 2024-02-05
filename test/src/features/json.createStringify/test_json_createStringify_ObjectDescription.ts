import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_createStringify_ObjectDescription = _test_json_stringify(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)(
  typia.json.createStringify<ObjectDescription>(),
);
