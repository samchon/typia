import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateFunction_ObjectAlias = (): void =>
  _test_functional_validateFunction("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.validateFunction(p),
  );
