import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createValidateEquals_ObjectPropertyNullable =
  _test_validateEquals("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )(typia.createValidateEquals<ObjectPropertyNullable>());
