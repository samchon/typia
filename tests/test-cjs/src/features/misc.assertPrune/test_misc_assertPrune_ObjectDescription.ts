import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_assertPrune_ObjectDescription = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)((input) =>
    typia.misc.assertPrune<ObjectDescription>(input),
  );
