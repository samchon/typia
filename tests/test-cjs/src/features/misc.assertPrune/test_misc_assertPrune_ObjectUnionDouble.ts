import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_assertPrune_ObjectUnionDouble = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.misc.assertPrune<ObjectUnionDouble>(input),
  );
