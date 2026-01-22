import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateFunction_ObjectGenericAlias = (): void =>
  _test_functional_validateFunction("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      typia.functional.validateFunction(p),
  );
