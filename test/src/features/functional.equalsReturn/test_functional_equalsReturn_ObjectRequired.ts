import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_equalsReturn_ObjectRequired =
  _test_functional_equalsReturn("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => ObjectRequired) =>
      typia.functional.equalsReturn(p),
  );
