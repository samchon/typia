import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_equalsReturn_ObjectHttpNullable = (): void =>
  _test_functional_equalsReturn("ObjectHttpNullable")(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
      typia.functional.equalsReturn(p),
  );
