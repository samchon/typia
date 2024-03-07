import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_validateEqualsReturnAsync_ObjectPropertyNullable =
  _test_functional_validateEqualsReturnAsync("ObjectPropertyNullable")(
    ObjectPropertyNullable,
  )((p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
    typia.functional.validateEqualsReturn(p),
  );
