import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createIsPrune_ObjectGenericUnion = (): void =>
  _test_misc_isPrune("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.misc.createIsPrune<ObjectGenericUnion>());
