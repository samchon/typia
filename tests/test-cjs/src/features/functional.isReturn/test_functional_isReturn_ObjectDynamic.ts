import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_isReturn_ObjectDynamic = (): void =>
  _test_functional_isReturn("ObjectDynamic")(ObjectDynamic)(
    (p: (input: ObjectDynamic) => ObjectDynamic) =>
      typia.functional.isReturn(p),
  );
