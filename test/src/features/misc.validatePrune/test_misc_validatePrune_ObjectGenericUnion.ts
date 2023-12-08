import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_validatePrune_ObjectGenericUnion =
  _test_misc_validatePrune("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )((input) => typia.misc.validatePrune<ObjectGenericUnion>(input));
