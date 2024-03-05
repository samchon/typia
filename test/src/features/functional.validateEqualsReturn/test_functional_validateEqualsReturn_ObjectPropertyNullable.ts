import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_validateEqualsReturn_ObjectPropertyNullable =
  _test_functional_validateEqualsReturn("ObjectPropertyNullable")(
    ObjectPropertyNullable,
  )((p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
    typia.functional.validateEqualsReturn(p),
  );
