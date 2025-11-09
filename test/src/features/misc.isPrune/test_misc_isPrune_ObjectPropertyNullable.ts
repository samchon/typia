import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_isPrune_ObjectPropertyNullable = (): void =>
  _test_misc_isPrune("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )((input) => typia.misc.isPrune<ObjectPropertyNullable>(input));
