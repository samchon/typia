import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateEqualsReturn_ObjectIntersection =
  (): void =>
    _test_functional_validateEqualsReturn("ObjectIntersection")(
      ObjectIntersection,
    )((p: (input: ObjectIntersection) => ObjectIntersection) =>
      typia.functional.validateEqualsReturn(p),
    );
