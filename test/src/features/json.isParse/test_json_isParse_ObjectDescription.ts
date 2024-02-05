import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_isParse_ObjectDescription = _test_json_isParse(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)((input) =>
  typia.json.isParse<ObjectDescription>(input),
);
