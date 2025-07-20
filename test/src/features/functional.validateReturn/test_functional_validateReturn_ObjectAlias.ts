import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateReturn_ObjectAlias = (): void =>
  _test_functional_validateReturn("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.validateReturn(p),
  );
