import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_isFunction_ObjectPropertyNullable =
  _test_functional_isFunction("ObjectPropertyNullable")(ObjectPropertyNullable)(
    (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
      typia.functional.isFunction(p),
  );
