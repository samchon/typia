import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_validateEquals_ObjectPropertyNullable = (): void =>
  _test_validateEquals("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )((input) => typia.validateEquals<ObjectPropertyNullable>(input));
