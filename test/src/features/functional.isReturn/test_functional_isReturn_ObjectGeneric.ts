import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_isReturn_ObjectGeneric = (): void =>
  _test_functional_isReturn("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => ObjectGeneric) =>
      typia.functional.isReturn(p),
  );
