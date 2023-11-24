import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assertEquals_ObjectGenericAlias = _test_assertEquals(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  typia.assertEquals<ObjectGenericAlias>(input),
);
