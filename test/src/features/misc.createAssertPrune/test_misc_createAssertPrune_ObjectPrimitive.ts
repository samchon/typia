import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_misc_createAssertPrune_ObjectPrimitive =
  _test_misc_assertPrune("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    typia.misc.createAssertPrune<ObjectPrimitive>(),
  );
