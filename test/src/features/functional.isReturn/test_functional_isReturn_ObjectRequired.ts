import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_isReturn_ObjectRequired =
  _test_functional_isReturn("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => ObjectRequired) =>
      typia.functional.isReturn(p),
  );
