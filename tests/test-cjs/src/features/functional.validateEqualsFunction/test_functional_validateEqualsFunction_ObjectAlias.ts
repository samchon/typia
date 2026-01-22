import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateEqualsFunction_ObjectAlias = (): void =>
  _test_functional_validateEqualsFunction("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.validateEqualsFunction(p),
  );
