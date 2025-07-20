import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateReturn_ObjectGenericAlias = (): void =>
  _test_functional_validateReturn("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      typia.functional.validateReturn(p),
  );
