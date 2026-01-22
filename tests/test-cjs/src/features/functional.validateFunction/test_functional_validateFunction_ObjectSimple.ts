import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateFunction_ObjectSimple = (): void =>
  _test_functional_validateFunction("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.validateFunction(p),
  );
