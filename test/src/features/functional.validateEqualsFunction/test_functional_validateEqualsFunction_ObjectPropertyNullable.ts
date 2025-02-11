import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_validateEqualsFunction_ObjectPropertyNullable =
  _test_functional_validateEqualsFunction("ObjectPropertyNullable")(
    ObjectPropertyNullable,
  )((p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
    typia.functional.validateEqualsFunction(p),
  );
