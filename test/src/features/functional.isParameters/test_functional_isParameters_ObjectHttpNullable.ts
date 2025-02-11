import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_isParameters_ObjectHttpNullable =
  _test_functional_isParameters("ObjectHttpNullable")(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
      typia.functional.isParameters(p),
  );
