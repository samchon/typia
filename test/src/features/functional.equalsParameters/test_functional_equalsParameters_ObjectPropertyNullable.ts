import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_equalsParameters_ObjectPropertyNullable =
  _test_functional_equalsParameters("ObjectPropertyNullable")(
    ObjectPropertyNullable,
  )((p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) =>
    typia.functional.equalsParameters(p),
  );
