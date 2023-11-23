import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_assertParse_ObjectPrimitive = _test_json_assertParse(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.json.assertParse<ObjectPrimitive>(input),
);
