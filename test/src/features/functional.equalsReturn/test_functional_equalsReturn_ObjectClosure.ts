import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_equalsReturn_ObjectClosure = (): void =>
  _test_functional_equalsReturn("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => ObjectClosure) =>
      typia.functional.equalsReturn(p),
  );
