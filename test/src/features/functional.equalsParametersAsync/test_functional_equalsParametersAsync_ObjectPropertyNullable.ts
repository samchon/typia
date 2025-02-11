import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_equalsParametersAsync_ObjectPropertyNullable =
  _test_functional_equalsParametersAsync("ObjectPropertyNullable")(
    ObjectPropertyNullable,
  )((p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
    typia.functional.equalsParameters(p),
  );
