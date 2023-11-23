import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_assertPrune_ObjectOptional = _test_misc_assertPrune(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  typia.misc.assertPrune<ObjectOptional>(input),
);
