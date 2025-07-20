import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_isParametersAsync_ObjectPropertyNullable =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectPropertyNullable")(
      ObjectPropertyNullable,
    )((p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
      typia.functional.isParameters(p),
    );
