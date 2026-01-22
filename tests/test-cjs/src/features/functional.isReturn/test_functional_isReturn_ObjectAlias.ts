import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_isReturn_ObjectAlias = (): void =>
  _test_functional_isReturn("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) => typia.functional.isReturn(p),
  );
