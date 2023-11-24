import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_createAssertPrune_ObjectNullable =
  _test_misc_assertPrune("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    typia.misc.createAssertPrune<ObjectNullable>(),
  );
