import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_assertPrune_ObjectPropertyNullable =
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.misc.assertPrune<ObjectPropertyNullable>(input),
  );
