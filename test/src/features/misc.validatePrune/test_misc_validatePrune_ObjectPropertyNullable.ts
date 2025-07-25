import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_validatePrune_ObjectPropertyNullable = (): void =>
  _test_misc_validatePrune("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )((input) => typia.misc.validatePrune<ObjectPropertyNullable>(input));
