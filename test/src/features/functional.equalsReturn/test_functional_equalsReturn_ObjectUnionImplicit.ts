import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_equalsReturn_ObjectUnionImplicit =
  _test_functional_equalsReturn("ObjectUnionImplicit")(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      typia.functional.equalsReturn(p),
  );
