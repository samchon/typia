import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertEquals_ObjectGenericUnion = _test_assertEquals(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
  typia.assertEquals<ObjectGenericUnion>(input),
);
