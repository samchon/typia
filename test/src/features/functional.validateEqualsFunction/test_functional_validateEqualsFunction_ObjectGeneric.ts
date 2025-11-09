import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateEqualsFunction_ObjectGeneric = (): void =>
  _test_functional_validateEqualsFunction("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => ObjectGeneric) =>
      typia.functional.validateEqualsFunction(p),
  );
