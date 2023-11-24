import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_validatePrune_ObjectUnionDouble =
  _test_misc_validatePrune("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )((input) => typia.misc.validatePrune<ObjectUnionDouble>(input));
