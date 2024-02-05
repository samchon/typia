import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_assertParse_ObjectDescription = _test_json_assertParse(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  typia.json.assertParse<ObjectDescription>(input),
);
