import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_equalsFunctionAsync_ObjectPropertyNullable =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectPropertyNullable")(
      ObjectPropertyNullable,
    )((p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
      typia.functional.equalsFunction(p),
    );
