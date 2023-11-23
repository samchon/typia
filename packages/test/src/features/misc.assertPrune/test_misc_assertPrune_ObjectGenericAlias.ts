import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_assertPrune_ObjectGenericAlias = _test_misc_assertPrune(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
  typia.misc.assertPrune<ObjectGenericAlias>(input),
);
