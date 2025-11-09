import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_validatePrune_ObjectIntersection = (): void =>
  _test_misc_validatePrune("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )((input) => typia.misc.validatePrune<ObjectIntersection>(input));
