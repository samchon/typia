import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_validateParametersAsync_ObjectPropertyNullable =
  _test_functional_validateParametersAsync("ObjectPropertyNullable")(
    ObjectPropertyNullable,
  )((p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
    typia.functional.validateParameters(p),
  );
