import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createAssertPrune_ObjectGenericUnion =
  _test_misc_assertPrune("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.misc.createAssertPrune<ObjectGenericUnion>());
