import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_validateReturnAsync_ObjectPropertyNullable =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectPropertyNullable")(
      ObjectPropertyNullable,
    )((p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
      typia.functional.validateReturn(p),
    );
