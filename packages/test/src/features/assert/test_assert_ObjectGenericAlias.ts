import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assert_ObjectGenericAlias = _test_assert(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  typia.assert<ObjectGenericAlias>(input),
);
