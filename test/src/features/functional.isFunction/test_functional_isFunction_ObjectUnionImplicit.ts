import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_isFunction_ObjectUnionImplicit =
  _test_functional_isFunction("ObjectUnionImplicit")(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      typia.functional.isFunction(p),
  );
