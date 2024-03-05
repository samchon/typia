import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_isReturn_ObjectUnionImplicit =
  _test_functional_isReturn("ObjectUnionImplicit")(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      typia.functional.isReturn(p),
  );
