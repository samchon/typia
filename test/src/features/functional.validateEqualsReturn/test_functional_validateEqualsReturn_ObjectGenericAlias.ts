import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateEqualsReturn_ObjectGenericAlias =
  _test_functional_validateEqualsReturn("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
    typia.functional.validateEqualsReturn(p),
  );
