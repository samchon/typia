import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_validateEquals_ObjectPrimitive = _test_validateEquals(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.validateEquals<ObjectPrimitive>(input),
);
