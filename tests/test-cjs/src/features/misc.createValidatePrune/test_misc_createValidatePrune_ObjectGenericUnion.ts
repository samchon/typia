import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createValidatePrune_ObjectGenericUnion = (): void =>
  _test_misc_validatePrune("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.misc.createValidatePrune<ObjectGenericUnion>());
