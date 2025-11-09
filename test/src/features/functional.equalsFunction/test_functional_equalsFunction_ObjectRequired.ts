import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_equalsFunction_ObjectRequired = (): void =>
  _test_functional_equalsFunction("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => ObjectRequired) =>
      typia.functional.equalsFunction(p),
  );
