import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_createIsParse_ObjectPrimitive = _test_json_isParse(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)(
  typia.json.createIsParse<ObjectPrimitive>(),
);
