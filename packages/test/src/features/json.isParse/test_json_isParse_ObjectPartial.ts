import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_isParse_ObjectPartial = _test_json_isParse(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  typia.json.isParse<ObjectPartial>(input),
);
