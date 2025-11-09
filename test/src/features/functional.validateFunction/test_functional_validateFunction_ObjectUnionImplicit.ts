import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_validateFunction_ObjectUnionImplicit = (): void =>
  _test_functional_validateFunction("ObjectUnionImplicit")(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      typia.functional.validateFunction(p),
  );
