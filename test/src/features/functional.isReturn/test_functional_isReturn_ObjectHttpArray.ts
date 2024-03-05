import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_isReturn_ObjectHttpArray =
  _test_functional_isReturn("ObjectHttpArray")(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      typia.functional.isReturn(p),
  );
