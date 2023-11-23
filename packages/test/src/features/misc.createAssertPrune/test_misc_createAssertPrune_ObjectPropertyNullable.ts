import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_createAssertPrune_ObjectPropertyNullable =
  _test_misc_assertPrune("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )(typia.misc.createAssertPrune<ObjectPropertyNullable>());
