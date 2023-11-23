import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertEquals_ObjectGenericArray = _test_assertEquals(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)((input) =>
  typia.assertEquals<ObjectGenericArray>(input),
);
