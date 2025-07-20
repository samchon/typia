import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_isReturn_ObjectDescription = (): void =>
  _test_functional_isReturn("ObjectDescription")(ObjectDescription)(
    (p: (input: ObjectDescription) => ObjectDescription) =>
      typia.functional.isReturn(p),
  );
